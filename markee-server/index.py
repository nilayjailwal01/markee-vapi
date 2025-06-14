from flask import Flask, request, jsonify, send_file
import os
import requests
import pandas as pd
import base64
import io
import json
import ast
import re
import google.generativeai as genai
from flask_cors import CORS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.vectorstores.faiss import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
from pydantic.v1 import BaseModel

load_dotenv()
google_api_key = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=google_api_key)

def load_json(json_path):
    with open(json_path, 'r') as file:
        return json.load(file)

def get_vector_store(performance_data):
    def safe_str(value):
        return str(value) if value is not None else ''

    def safe_list(value):
        return value if isinstance(value, list) else []
    # Generate text chunks from performance data
    text_chunks = []
    for item in performance_data:
        channels = safe_list(item.get('channel'))
        products = safe_list(item.get('products'))
        creatives = safe_list(item.get('creatives'))

        for creative in creatives:
            chunk = (
                f"{item.get('campaignName', '')} "
                f"{', '.join(map(safe_str, channels))} "
                f"{', '.join(map(safe_str, products))} "
                f"CreativeID: {safe_str(creative.get('CreativeID'))} "
                f"Sent: {safe_str(creative.get('Sent'))}, "
                f"OR: {safe_str(creative.get('OR'))}, "
                f"CTR: {safe_str(creative.get('CTR'))}, "
                f"Delivered: {safe_str(creative.get('Delivered'))}, "
                f"Open: {safe_str(creative.get('Open'))}, "
                f"ConversionRate: {safe_str(creative.get('ConversionRate'))}, "
                f"CPC: {safe_str(creative.get('CPC'))}, "
                f"SessionDuration: {safe_str(creative.get('SessionDuration'))}, "
                f"Views: {safe_str(creative.get('Views'))}, "
                f"WatchTime: {safe_str(creative.get('WatchTime'))}, "
                f"Clicks: {safe_str(creative.get('Clicks'))}, "
                f"Like: {safe_str(creative.get('Like'))}, "
                f"Comment: {safe_str(creative.get('Comment'))}, "
                f"Shares: {safe_str(creative.get('Shares'))}, "
                f"PageRedirect: {safe_str(creative.get('PageRedirect'))}, "
                f"TotalSales: {safe_str(creative.get('TotalSales'))}, "
                f"MarketSpend: {safe_str(creative.get('MarketSpend'))}, "
                f"Reach: {safe_str(creative.get('Reach'))}, "
                f"Engagement: {safe_str(creative.get('Engagement'))}"
            )
            text_chunks.append(chunk)
    # Create vector store using FAISS and embeddings
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    # Save vector store locally
    vector_store.save_local("faiss_index")


def get_conversational_chain():

    prompt_template = """
    You are an AI assistant tasked with analyzing historical campaign data. Given the JSON structure with detailed campaign and creative performance metrics, your task is to:

    Identify the most successful similar campaign that historically used the specified channel and give summary as empty.
    If you can not find the most similar campaign search amongst the input channel and give back the most successful creative for that channel.
    Determine the top-performing creative within that campaign based on metrics such as Reach, Engagement, CTR, Conversion Rate, and Market Spend.
    Return me very short summary of why u chose what u chose and creative id in json like 'summary':'','creativeID':'' format.
    Context:\n {context}?\n
    Question: \n{question}\n
    Answer:
    """
    model = ChatGoogleGenerativeAI(model="gemini-1.5-flash", temperature=0.3)
    prompt = PromptTemplate(
        template=prompt_template,input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain

def user_input(campaign_name, channel, product=None):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index", embeddings,allow_dangerous_deserialization=True)
    query = f"{campaign_name} {channel} {product if product else ''}"
    docs = new_db.similarity_search(query)
    chain = get_conversational_chain()
    response = chain(
        {"input_documents": docs, "question": query}, return_only_outputs=True
    )

    json_string = response["output_text"].replace('json', '').replace('```', '').replace('\n', '').replace("  ", '')
    data_dict = json.loads(json_string)
    metadata = load_json('creative_descriptions_cleaned.json')
    metadata_df = pd.DataFrame(metadata)

    ### Nisit 18/11/2024

    try:
    # Attempt to retrieve the creative_info based on creativeID
        creative_info = metadata_df[metadata_df['creativeID'] == float(data_dict['creativeID'])].to_dict(orient='records')[0]
    except (TypeError, KeyError, IndexError, ValueError) as e:
        # Hardcoded fallback in case of an error

        creative_info = {
            'creativeID': 6943.0,
            'campaignName': 'Suite Dreams',
            'creativegraphic': 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'Analysis': "{'Content Description': 'A resort pool with orange bean bags and an orange umbrella. The pool is surrounded by palm trees and a wooden deck.', 'Dominant Colors': ['blue', 'orange', 'green', 'brown'], 'Contextual Analysis': 'The image depicts a relaxing and luxurious setting at a resort. The bright colors and clear blue water create a cheerful and inviting atmosphere.', 'Object Detection': ['pool', 'bean bags', 'umbrella', 'palm trees', 'wooden deck', 'resort', 'building', 'water', 'sky'], 'Text Recognition': []}"
        }

    return creative_info


def main():

    performance_data = load_json('campaign_data.json')

    metadata = load_json('creative_descriptions_cleaned.json')
    get_vector_store(performance_data)
    # campaign_name = "Belong Anywhere"
    # channel = "Email"
    # product = "Hotel"
    data = request.get_json()
    product = data.get('product', '')
    channel = data.get('channel', '')
    campaign_name = data.get('campaign_name')
    response = user_input(campaign_name, channel, product)
    return response

app = Flask(__name__)
CORS(app)

# Port configuration for Render deployment
port = int(os.environ.get('PORT', 3000))
app.run(host='0.0.0.0', port=port)

API_KEY = os.getenv('NVAPI_KEY')
INVOKE_URL = "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-xl"

headers = {
    "Authorization": f"Bearer {os.getenv('NVAPI_TOKEN')}",
    "Accept": "application/json",
}

@app.route("/googlelogin", methods=["POST"])
async def google_login():
    code = request.json.get('token')

    try:
        # Exchange the authorization code for an access token
        token_response = requests.post(
            'https://oauth2.googleapis.com/token',
            data={
                'code': code,
                'client_id': os.environ['CLIENT_ID'],
                'client_secret': os.environ['CLIENT_SECRET'],
                'redirect_uri': os.environ['REDIRECT_URI'],
                'grant_type': 'authorization_code'
            }
        )
        token_response.raise_for_status()
        access_token_info = token_response.json()
        print(access_token_info)

        token = access_token_info.get('id_token')
        if not token:
            return jsonify({'error': 'No ID token found'}), 400

        # Verify the access token
        idinfo = requests.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            headers={'Authorization': f'Bearer {access_token_info["access_token"]}'}
        )
        idinfo.raise_for_status()
        user_info = idinfo.json()

        name = user_info.get('name')
        email = user_info.get('email')
        picture = user_info.get('picture')

        # Upsert the user in your database
        upsert(users, {'name': name, 'email': email, 'picture': picture})

        return jsonify({'name': name, 'email': email, 'picture': picture}), 201

    except requests.exceptions.RequestException as error:
        print('Error during token exchange or profile retrieval:', error)
        if error.response:
            print('Error Response Data:', error.response.json())
            print('Error Response Status:', error.response.status_code)
        return jsonify({'error': 'Internal Server Error'}), 500

    except Exception as e:
        print('An unexpected error occurred:', e)
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/generate-image', methods=['POST'])
def generate_image():
    data = request.json
    text_prompt = data.get('text_prompts', [{"text": ""}])

    # payload = {
    #     "text_prompts": text_prompt,
    #     "seed": 0,
    #     "steps": 8
    # }
    payload = {
    "text_prompts":text_prompt ,
    "cfg_scale": 5,
    "sampler": "K_DPM_2_ANCESTRAL",
    "seed": 0,
    "steps": 25
}

    response = requests.post(INVOKE_URL, headers=headers, json=payload)
    response.raise_for_status()
    response_body = response.json()

    image_data = response_body['artifacts'][0]['base64']

    if len(image_data) % 4:
        image_data += '=' * (4 - len(image_data) % 4)

    image_bytes = base64.b64decode(image_data)

    image = io.BytesIO(image_bytes)
    image.seek(0)

    return send_file(image, mimetype='image/jpeg', as_attachment=True, download_name='output_image.jpg')

GOOGLE_API_KEY = os.environ.get('GEMINI_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel(model_name="gemini-1.5-flash")

@app.route('/generate-prompts', methods=['POST'])
def generate_prompts():
    data = request.get_json()
    product = data.get('product', '')
    language = data.get('language', '')
    channel = data.get('channel', '')
    geography = data.get('geography', '')
    campaign_description = data.get('campaign_description', '')
    creative_metadata  = main()
    prompt = (
        # f"Please generate 3 example prompts using the provided information such as {product if product else 'N/A'}, "
        # f"{channel if channel else 'N/A'}, {language if language else 'N/A'}, {geography if geography else 'N/A'}, "
        # f"and {campaign_description if campaign_description else 'N/A'}. "
        # "These prompts should be suitable for a marketing manager at a fortune 100 hospitality company to use directly or to provide to a text-to-image LLM for image creation. "
        # f"The prompts should be concise and to the point.The prompts shall consider the dominant colors from {creative_metadata} and suggest those colors to be used for generating the creative dont mention anything about image but only mention colors that can be used and seperately call out different colors to be used taking it from dominant colors"
        # f"Please use {creative_metadata} information to take as reference and stick to only dominant colours from {creative_metadata} for suggestions in prompts and take references from this content in your prompts."
        # "It is necessary for output to be python list with 3 generated prompts as element of list."
        # f"There should be no other text or description or special characters like \ "
        f"A vibrant {product} experience in {geography}, showcasing {campaign_description} with a focus on {channel} marketing. Use a color palette of {', '.join(creative_metadata)} dominant colors for a visually engaging image.",
        f"An evocative scene capturing the essence of {campaign_description}, highlighting {product} in {geography} for {channel} marketing. Incorporate the shades from colors {', '.join(creative_metadata)} dominant colors to create a visually appealing and memorable image.",
        f"A {channel} marketing image for {product} in {geography}, emphasizing {campaign_description}. Use a color palette inspired by {creative_metadata}, including the colors {', '.join(creative_metadata)} to create a captivating and inviting image."
        f"Use the content description from {creative_metadata} and give the similar recommendation prompt with only minor tweaks. Do not include and suggest anything related to geography,customer segment,objective of campaign and textual things."
        "Do not give any image links or references in the result"
        "It is necessary for output to be python list with 3 generated prompts as element of list.There should be no other text or description or special characters like \ "
    )

    chat_session = model.start_chat()
    response = chat_session.send_message(prompt)
    text = response.text

    # cleaned_text = re.sub(r'\n+', '', text)

    text = text[text.find('['): text.find(']')+1]
    corrected_string = re.sub(r'\n+', '', text)
    lst = ast.literal_eval(corrected_string)
    prompts_list = lst

    return jsonify({'prompts': prompts_list}), 200



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

