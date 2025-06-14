
interface Option {
    value: string | number;
    label: string;
}

export type Analysis = {
    Content_Description: string;
    Dominant_Colors: string[];
    Contextual_Analysis: string;
    Text_Recognition: string[];
};

export type NewCreativeData = {
    creativeID: number;
    campaignName: string;
    creativegraphic: string;
    Analysis: Analysis[];
    Heading_Size:string;
    Heading_Font:string;
    Heading_Color:string;
    Heading_Text:string;
    Sub_Heading_Size:string;
    Sub_Heading_Font:string;
    Sub_Heading_Color:string;
    Sub_Heading_Text:string;
    Body_Size: string;
    Body_Font:string;
    Body_Color:string;
    Body_Text: string;
};

const newCampaignsData: NewCreativeData[] = 
[
  {
    "creativeID": 5820,
    "campaignName": "Luxury Unleashed",
    "creativegraphic": "https://images.pexels.com/photos/24740097/pexels-photo-24740097/free-photo-of-people-on-gondolas-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "yellow",
    "Heading_Text": "Luxury Unleashed: Experience Venice in Style",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "black",
    "Sub_Heading_Text": "Discover the Enchantment of Hotel Cavalletto",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Immerse yourself in the timeless elegance of Venice at Hotel Cavalletto.",
    "Analysis": [
      {
        "Content_Description": "The image shows a canal in Venice, Italy. There are several gondolas in the water, some with people in them. The gondolas are docked in front of a yellow building with the sign HOTEL CAVALLETTO written on it. The building has many windows with red awnings. The sky is blue and there is a sunny day.",
        "Dominant_Colors": ["yellow", "blue", "black", "white", "red"],
        "Contextual_Analysis": "The image depicts a scenic view of a canal in Venice, Italy, with gondolas and a hotel building. The setting is outdoors and the time of day is likely daytime, as the sun is shining brightly. The mood is tranquil and peaceful.",
        "Text_Recognition": [
          "HOTEL CAVALLETTO"
        ]
      }
    ]
  },
  {
    "creativeID": 3331,
    "campaignName": "Luxury Unleashed",
    "creativegraphic": "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Luxury Unleashed",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Escape to Tranquility",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Indulge in the ultimate escape at our luxurious resort. Immerse yourself in the serene ambiance of our pristine pool, surrounded by lush greenery and breathtaking views. Unwind on our plush lounge chairs under the shade of our white umbrellas, as you bask in the warm sunshine. Let our attentive staff cater to your every need, ensuring an unforgettable experience of luxury and relaxation.",
    "Analysis": [
      {
        "Content_Description": "The image shows a large swimming pool with three white umbrellas and lounge chairs around it. The pool is surrounded by lush green trees and a building in the background. The sky is blue with white clouds. The pool is empty and looks inviting.",
        "Dominant_Colors": ["blue", "white", "green"],
        "Contextual_Analysis": "The image depicts a relaxing scene at a resort or hotel. The clear blue sky, lush greenery, and inviting pool suggest a peaceful and tranquil setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8637,
    "campaignName": "Luxury Unleashed",
    "creativegraphic": "https://images.pexels.com/photos/3101522/pexels-photo-3101522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "black",
    "Heading_Text": "Luxury Unleashed: Where Music Meets Opulence",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "red",
    "Sub_Heading_Text": "Experience the Thrill of Exclusive Entertainment",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in a world of unparalleled luxury where music meets opulence. ",
    "Analysis": [
      {
        "Content_Description": "A rapper is performing on stage in front of a large crowd. The rapper is wearing a black shirt and a black hat. He is holding a microphone in his right hand and is rapping into it. The crowd is cheering and dancing along to the music. There are red lights shining on the stage, creating a lively atmosphere.",
        "Dominant_Colors": ["black", "red", "white"],
        "Contextual_Analysis": "The image depicts a live music performance in an indoor setting, likely a concert or club. The red lights and enthusiastic crowd suggest a high-energy and exciting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6176,
    "campaignName": "Luxury Unleashed",
    "creativegraphic": "https://images.pexels.com/photos/2244441/pexels-photo-2244441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Luxury Unleashed: Experience the Extraordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Where Elegance Meets Unbridled Excitement",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Prepare to be captivated by a world of unparalleled luxury. ",
    "Analysis": [
      {
        "Content_Description": "A young woman in a red and green dress is dancing on a stage. She is holding a silver feather boa in her right hand. There are two other women in the background, also in colorful dresses.  The stage is lit with colorful lights.",
        "Dominant_Colors": ["red", "green", "black", "silver", "yellow"],
        "Contextual_Analysis": "The image depicts a performance on a stage. The mood is festive and energetic. It is likely a dance performance.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5926,
    "campaignName": "Beachfront Bliss",
    "creativegraphic": "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Indulge in Culinary Delights",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience Exquisite Flavors",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Escape to our beachfront paradise and savor culinary masterpieces crafted by our award-winning chefs.",
    "Analysis": [
      {
        "Content_Description": "A chef is plating a dish of mushrooms and other ingredients on a wooden platter. The dish is being plated in a kitchen setting. There is steam coming from the dish, which is likely from liquid nitrogen being used to create a dramatic effect. The chef is wearing a white chefs jacket. There are other plates of food in the background.",
        "Dominant_Colors": ["brown", "white", "green"],
        "Contextual_Analysis": "The image depicts a chef plating a dish in a kitchen setting. The steam coming from the dish suggests that the chef is using liquid nitrogen to create a dramatic effect. The scene is likely taking place in a restaurant kitchen.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7110,
    "campaignName": "Beachfront Bliss",
    "creativegraphic": "https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Escape to",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Beachfront Bliss",
    "Body_Size": "P",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Discover the serene beauty of our beachfront oasis. Immerse yourself in the captivating culture of India, where ancient history meets modern luxury. Relax in our beautifully appointed rooms, explore the vibrant markets, and savor delectable cuisine. Unwind on pristine beaches, bask under the warm sun, and create unforgettable memories.Book your escape today and experience the ultimate beachfront bliss.",
    "Analysis": [
      {
        "Content_Description": "The image shows an ancient red sandstone building with a white marble dome and minarets. It has a large courtyard in front of it and is surrounded by trees. The sky is a beautiful blue with pink and white clouds.",
        "Dominant_Colors": ["red", "white", "blue"],
        "Contextual_Analysis": "The image depicts a historical site, likely a tomb or a mosque, in India. The setting is outdoors, and the time of day is likely evening, based on the warm colors of the sky.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3274,
    "campaignName": "Beachfront Bliss",
    "creativegraphic": "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "orange",
    "Heading_Text": "Escape to Beachfront Bliss",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Unwind and Rejuvenate by the Sea",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Imagine yourself sinking into plush lounge chairs, a vibrant orange towel draped across your shoulders. The gentle sound of waves crashing on the shore blends with the calming rhythm of the pool.As the sun dips below the horizon, painting the sky in hues of soft blue, you feel your worries melt away. This is the essence of Beachfront Bliss. Discover your perfect escape.",
    "Analysis": [
      {
        "Content_Description": "The image shows a row of white lounge chairs with orange towels on them. The chairs are lined up next to a swimming pool. There are palm trees in the background. The sun is setting and the sky is a light blue.",
        "Dominant_Colors": ["blue", "white", "orange", "brown"],
        "Contextual_Analysis": "The image depicts a relaxing scene at a resort or hotel. The setting is outdoors, at a poolside, during the evening. The mood is calm and serene.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 1709,
    "campaignName": "Beachfront Bliss",
    "creativegraphic": "https://images.pexels.com/photos/6394556/pexels-photo-6394556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Escape to Beachfront Bliss",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Unwind and Recharge in Your Private Oasis",
    "Body_Size": "Body Text",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Experience the ultimate coastal retreat at our beachfront hotel. ",
    "Analysis": [
      {
        "Content_Description": "A white suitcase with brown trim sits on a wood floor near a closed door and a mirror. The mirror reflects a patterned wall that is a mix of white, black, and gray. The door has a wood grain pattern and a silver handle.",
        "Dominant_Colors": ["white", "brown", "gray", "silver"],
        "Contextual_Analysis": "The image depicts a hotel room or a hallway. The suitcase suggests travel and the closed door and mirror imply a private space.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 2649,
    "campaignName": "Cultural Encounters",
    "creativegraphic": "https://images.pexels.com/photos/6394569/pexels-photo-6394569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "green",
    "Heading_Text": "Embrace Cultural Encounters",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the World in Every Bite",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Discover a world of flavors and cultures within our walls.",
    "Analysis": [
      {
        "Content_Description": "The image shows a close-up of a wall with a large-scale tropical leaf mural. There are two small decorative pots on a granite countertop in the foreground. The wall is textured with white bricks. The countertop is made of granite.",
        "Dominant_Colors": ["green", "white", "brown", "grey"],
        "Contextual_Analysis": "The image appears to be taken indoors in a kitchen or dining room. The tropical mural suggests a relaxed and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6883,
    "campaignName": "Cultural Encounters",
    "creativegraphic": "https://images.pexels.com/photos/24734803/pexels-photo-24734803/free-photo-of-medieval-castle-in-france-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "gray",
    "Heading_Text": "Experience History, Immerse Yourself in Culture",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Discover a world of ancient wonder and authentic charm.",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Step into a world where time stands still. Explore the majestic castle, a testament to bygone eras, and lose yourself in the quaint charm of the village below. Our hospitality campaign invites you to embrace cultural encounters, where history meets contemporary comfort.Unwind in a realm where every corner whispers stories of the past, and every moment offers a chance to connect with the authentic essence of the region.Let our meticulously curated experiences guide you on a journey of discovery, where ancient traditions intertwine with modern luxury.",
    "Analysis": [
      {
        "Content_Description": "A large, ancient castle sits on a hill overlooking a small village. The castle is made of stone and has a tall, pointed tower. The village is nestled in the valley below the castle. The sky is a soft blue and there are clouds in the distance.",
        "Dominant_Colors": ["gray", "blue", "brown", "green"],
        "Contextual_Analysis": "The image depicts a scene of a medieval castle and village in the twilight hours. The soft blue sky and the faint pink hues in the clouds suggest a time shortly after sunset. The overall mood is peaceful and serene, with the castle standing as a testament to history and the village nestled at its foot.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 2692,
    "campaignName": "Cultural Encounters",
    "creativegraphic": "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "48px",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Cultural Encounters",
    "Sub_Heading_Size": "24px",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Experience the world, one room at a time.",
    "Body_Size": "16px",
    "Body_Font": "Arial",
    "Body_Color": "grey",
    "Body_Text": "Immerse yourself in a world of comfort and sophistication. Our modern hotel rooms offer a sanctuary for relaxation and rejuvenation. Step inside and discover a haven designed to inspire and delight. With sleek furniture, calming colors, and the perfect blend of modern amenities, every stay promises a unique cultural encounter.",
    "Analysis": [
      {
        "Content_Description": "A modern hotel room with a large bed, a flat-screen TV, and a wooden nightstand. The bed is made with a grey duvet and white pillows. The TV is mounted on the wall above a shelf. The nightstand is next to the bed and has a lamp on it. The room is decorated in a modern style with light colors and a minimalist aesthetic.",
        "Dominant_Colors": ["white", "grey", "brown"],
        "Contextual_Analysis": "The image depicts a hotel room, likely designed to be inviting and comfortable for guests. The minimalist decor and sleek furniture create a modern and sophisticated ambiance. The large windows and natural light suggest a bright and airy space. The overall mood conveyed is one of tranquility and relaxation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 9751,
    "campaignName": "Cultural Encounters",
    "creativegraphic": "https://images.pexels.com/photos/24596034/pexels-photo-24596034/free-photo-of-fountain-next-to-hagia-sophia-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Cultural Encounters:",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Experience Istanbul's Vibrant Heritage",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Embark on a journey of cultural immersion in Istanbul, a city where ancient history meets modern vibrancy. Witness the majestic Hagia Sophia, a testament to the city's rich past, now undergoing a meticulous restoration. Explore the bustling streets, savor delicious Turkish cuisine, and immerse yourself in the warm hospitality of the Turkish people. Let our Cultural Encounters campaign be your guide to unlocking the hidden treasures of Istanbul.",
    "Analysis": [
      {
        "Content_Description": "A large fountain in front of a mosque with a scaffolding on the right side of the image. The fountain has several jets of water shooting up into the air, and there are people gathered around it. The mosque is a large, domed building with a minaret. There are also trees and bushes in the foreground.",
        "Dominant_Colors": ["blue", "brown", "white", "green"],
        "Contextual_Analysis": "The image is likely taken in Istanbul, Turkey, and depicts a popular tourist destination. The mosque is likely the Hagia Sophia, a famous historical landmark. The scaffolding on the right suggests that the mosque is undergoing renovations.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8932,
    "campaignName": "Gastronomic Journeys",
    "creativegraphic": "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "orange",
    "Heading_Text": "Embark on a Gastronomic Journey",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Discover Culinary Delights in Picturesque Coastal Towns",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Experience the vibrant tapestry of flavors and breathtaking coastal landscapes. Our curated gastronomic journeys offer an immersive exploration of local culinary traditions, from fresh seafood to artisanal delicacies. Indulge in unforgettable dining experiences in charming seaside towns, where the sunset paints the sky with hues of orange and yellow, and the gentle lapping of waves creates a symphony of tranquility.",
    "Analysis": [
      {
        "Content_Description": "The image shows a coastal town built on the side of a cliff. The town is lit up with lights and there are many boats in the water. The image is taken from a high vantage point, looking down at the town. The sky is a beautiful sunset color.",
        "Dominant_Colors": ["blue", "orange", "yellow", "green"],
        "Contextual_Analysis": "The image depicts a serene and picturesque coastal town at sunset. The warm lighting and the presence of boats suggest a tranquil and idyllic setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8571,
    "campaignName": "Gastronomic Journeys",
    "creativegraphic": "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "light brown",
    "Heading_Text": "Indulge in Gastronomic Journeys",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "pink",
    "Sub_Heading_Text": "Experience Unforgettable Culinary Adventures",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "light blue",
    "Body_Text": "Escape to a world of exquisite flavors and unparalleled hospitality. Our curated culinary experiences, meticulously crafted with local ingredients and inspired by the artistry of our chefs, will tantalize your taste buds and leave you with lasting memories. Discover the perfect blend of comfort and indulgence in our luxurious accommodations, where every detail is designed to enhance your journey. Embark on a gastronomic adventure that will transport you to a realm of culinary excellence.",
    "Analysis": [
      {
        "Content_Description": "The image shows a modern bedroom with a large bed, a pink upholstered ottoman, and two hanging lamps. The bed is made with white sheets and a light blue blanket. The headboard is made of a light brown material with vertical lines. There are two white pillows and two gray pillows. The lamps are made of metal and have a copper finish. The walls are white with moldings, and the floor is made of light wood. There is a white curtain on the right side of the image.",
        "Dominant_Colors": ["white", "light blue", "pink", "light brown"],
        "Contextual_Analysis": "The image depicts a luxurious and modern bedroom. The lighting, furniture, and decor suggest a high-end and stylish setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8008,
    "campaignName": "Gastronomic Journeys",
    "creativegraphic": "https://images.pexels.com/photos/6782568/pexels-photo-6782568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Embark on a Culinary Adventure",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "light blue",
    "Sub_Heading_Text": "Discover the Flavors of Your Dreams",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "silver",
    "Body_Text": "Indulge in a gastronomic journey, where every dish is a masterpiece. Our expert chefs curate an unforgettable culinary experience, designed to tantalize your taste buds and transport you to new heights of flavor.",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a bed, a side table, and two hanging lamps. The bed is made with a light blue blanket and a light blue pillow on top of a white pillow. The side table is made of metal and has a glass top. There is a vase with flowers on the table. The lamps are both silver, and one of them has a copper shade.",
        "Dominant_Colors": ["white", "light blue", "silver", "gray", "brown"],
        "Contextual_Analysis": "The image conveys a sense of calm and relaxation, likely in a bedroom setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3049,
    "campaignName": "Gastronomic Journeys",
    "creativegraphic": "https://images.pexels.com/photos/1307929/pexels-photo-1307929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Embark on Gastronomic Journeys",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "orange",
    "Sub_Heading_Text": "Experience the Thrill of Culinary Exploration",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a world of flavors as you spin through our vibrant culinary landscape. Each stop offers a unique and unforgettable taste sensation, leaving you craving for more. Join us on this gastronomic adventure and let your taste buds soar to new heights.",
    "Analysis": [
      {
        "Content_Description": "A Ferris wheel with colorful gondolas against a blue sky with white clouds.",
        "Dominant_Colors": ["blue", "white", "gray", "red", "orange", "green"],
        "Contextual_Analysis": "The image depicts a Ferris wheel in an amusement park, possibly on a sunny day. The scene conveys a sense of joy and excitement.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 9298,
    "campaignName": "Gastronomic Journeys",
    "creativegraphic": "https://images.pexels.com/photos/17001738/pexels-photo-17001738/free-photo-of-decorated-tables-for-wedding-in-luxury-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Gastronomic Journeys: Where Culinary Adventures Begin",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Art of Fine Dining",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Embark on a culinary adventure with our meticulously curated dining experiences. From the rustic charm of our brick-walled dining room to the exquisite details of our table settings, every element is designed to create an unforgettable ambiance.",
    "Analysis": [
      {
        "Content_Description": "A large room with brick walls and wooden floors. There are two round tables set for dinner, with white tablecloths and wooden chairs. The tables are decorated with floral centerpieces and there are glasses and plates on the tables. The room is lit by overhead lights and there is a bar in the background.",
        "Dominant_Colors": ["brown", "white", "beige"],
        "Contextual_Analysis": "The image depicts a wedding reception or a formal dinner party. The setting is a large room with a brick wall and wooden floors, which suggests a rustic or industrial style. The tables are set for dinner, with formal place settings and centerpieces, which suggests a special occasion.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4559,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/12607567/pexels-photo-12607567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Escape the Everyday",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Discover serenity amidst the citys pulse.",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Our campaign highlights the unexpected beauty and calm found within the urban landscape. Through evocative imagery and compelling storytelling, we showcase unique and personalized experiences that redefine the concept of urban living. Prepare to discover a world of comfort and luxury, where contemporary design meets traditional hospitality.",
    "Analysis": [
      {
        "Content_Description": "A white building with a blue dome and a cross on top. The building is surrounded by other buildings, and there is a clear blue sky in the background.",
        "Dominant_Colors": ["blue", "white"],
        "Contextual_Analysis": "Setting, outdoors, Time of Day, day, Mood, peaceful",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4830,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise: Urban Retreats",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Indulge in Luxury and Relaxation",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Discover a haven of tranquility amidst the urban bustle. Our luxurious resort offers a serene escape with stunning ocean views, a sprawling pool, and impeccable service. Unwind in our plush lounge chairs under the shade of our wooden pergola, and let the soothing sounds of the ocean waves wash away your worries. Experience the ultimate urban retreat.",
    "Analysis": [
      {
        "Content_Description": "A luxurious resort with a large swimming pool overlooking the ocean. The pool is surrounded by a white deck and a wooden pergola with lounge chairs. There is a person standing near the building on the right.",
        "Dominant_Colors": ["blue", "white", "brown"],
        "Contextual_Analysis": "The image depicts a luxurious resort setting, likely on a tropical island. The clear blue sky and ocean suggest a sunny day. The overall mood is serene and relaxing.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3452,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/3811014/pexels-photo-3811014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Urban Retreats: Where Festive Traditions Meet Modern Comfort",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Magic of a Russian Christmas Market",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "yellow",
    "Body_Text": "Escape the hustle and bustle of city life and immerse yourself in the warmth and charm of a traditional Russian Christmas market. Discover the artistry of samovars, indulge in festive treats, and soak up the festive atmosphere. Book your urban retreat today and experience the magic of a truly unique holiday celebration.",
    "Analysis": [
      {
        "Content_Description": "The image shows a brightly lit building with Christmas lights and decorations. There is a sign that says u0421u0410u041cu041eu0412u0410u0420u042b (Samovars) in Russian, which indicates that it is a shop or a stall selling samovars. The building is decorated with Christmas lights and colorful flags, creating a festive atmosphere. The image is taken at night, and the lights illuminate the scene.",
        "Dominant_Colors": ["yellow", "white", "red", "brown", "black"],
        "Contextual_Analysis": "The image shows a festive setting, possibly a Christmas market or a street fair. The decorations and the sign suggest that it is a commercial area. The image conveys a sense of joy and celebration.",
        "Text_Recognition": [
          "u0421u0410u041cu041eu0412u0410u0420u042b"
        ]
      }
    ]
  },
  {
    "creativeID": 1533,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "pink",
    "Heading_Text": "Escape the City, Recharge Your Soul",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Urban Retreats: Your Oasis Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Indulge in a moment of tranquility amidst the bustling urban landscape. Our curated retreats offer a sanctuary for rejuvenation, where vibrant flavors and refreshing experiences await. Discover the perfect blend of wellness and adventure, tailored to your needs. Book your escape today and rediscover your inner peace.",
    "Analysis": [
      {
        "Content_Description": "A still life of fruit and a smoothie on a white table. A pineapple is to the right of the table, next to a glass jar with a pink smoothie and a golden straw. There is a bowl of strawberries to the left of the smoothie and two bananas, some raspberries, and two orange slices in the front.",
        "Dominant_Colors": ["pink", "yellow", "green", "red", "white", "orange"],
        "Contextual_Analysis": "The image is a still life of fruit and a smoothie, suggesting a healthy and refreshing snack or meal. The pink background and the bright colors of the fruit create a cheerful and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4680,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/1413968/pexels-photo-1413968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Ancient Wonders",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "grey",
    "Sub_Heading_Text": "Discover Urban Retreats Rich in History",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in the captivating allure of history with our exclusive Urban Retreats. Explore ancient landmarks, soak in breathtaking views, and experience the magic of time-honored destinations.Our curated collection of urban escapes offers a unique blend of modern comforts and timeless charm, ensuring a truly unforgettable journey.",
    "Analysis": [
      {
        "Content_Description": "The image shows the ruins of an ancient Roman temple. The temple is made of stone and has a series of columns that are still standing. The temple is located in a grassy field and there are trees in the background. The sky is clear and blue. ",
        "Dominant_Colors": ["brown", "grey", "white"],
        "Contextual_Analysis": "The image is a photograph of an ancient Roman temple. The setting is outdoors, and the time of day is likely daytime. The mood conveyed is one of history and antiquity.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7863,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "green",
    "Heading_Text": "Escape to Urban Retreats",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Discover Tranquility Amidst the City",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Immerse yourself in the serenity of nature, just steps away from the bustling city. Our urban retreats offer a sanctuary for relaxation and rejuvenation. Unwind amidst lush greenery, cascading waterfalls, and the soothing sounds of nature. Experience the perfect blend of urban convenience and tranquil escape.",
    "Analysis": [
      {
        "Content_Description": "The image shows a waterfall cascading down a rocky cliff face, surrounded by lush green foliage. The waterfall is obscured by mist, creating a sense of mystery and tranquility. The scene is likely located in a tropical rainforest.",
        "Dominant_Colors": ["green", "white", "gray"],
        "Contextual_Analysis": "Setting, outdoors, Time of day, day, Mood, peaceful, Location, tropical rainforest",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 9349,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/4954713/pexels-photo-4954713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Discover Urban Retreats That Ignite Your Soul",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Step into a realm of tranquility and wonder, where city lights fade into the cosmic tapestry above. Our urban retreats offer a unique escape from the everyday, inviting you to reconnect with yourself amidst the celestial splendor. Experience the serenity of a starry night, the comforting glow of a lighthouse, and the promise of a rejuvenating escape.Discover your urban oasis.",
    "Analysis": [
      {
        "Content_Description": "A red lighthouse stands tall against a backdrop of a dark, star-filled sky. The Milky Way stretches across the sky, and the lighthouses beam of light shines up into the night.",
        "Dominant_Colors": ["black", "blue", "white", "red"],
        "Contextual_Analysis": "The image conveys a sense of solitude and wonder. It is likely a nighttime scene, as the stars are visible and the lighthouses beam is shining.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7033,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/6475035/pexels-photo-6475035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "gray",
    "Heading_Text": "Escape the City, Reconnect with Yourself.",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Urban Retreats: Where Luxury Meets Tranquility.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Indulge in the ultimate urban escape at our luxurious hotel. ",
    "Analysis": [
      {
        "Content_Description": "A man in a suit is sitting on a couch in a luxurious living room. He is looking at his phone and appears to be engrossed in it. The room is furnished with a couch, a coffee table, and a decanter of alcohol. The man is wearing a black suit, white shirt, and a dark tie. The walls are a light color and there are some paintings on the walls.",
        "Dominant_Colors": ["gray", "white", "brown", "black"],
        "Contextual_Analysis": "The image depicts a man relaxing in a luxurious living room. The setting is indoors and the time of day is likely evening. The mood conveyed is one of quiet contemplation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6789,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/27200831/pexels-photo-27200831/free-photo-of-a-laptop-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "black",
    "Heading_Text": "Escape the City, Revive Your Spirit",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Discover Urban Retreats, Designed for Your Wellbeing",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Seeking a moment of tranquility amidst the urban chaos? Our curated selection of urban retreats offers a sanctuary for your mind and body. ",
    "Analysis": [
      {
        "Content_Description": "A white desk with a laptop computer, a mouse, a lamp, a glass of water with a straw, a stack of books, and a small box on it. The laptop is open and the screen is displaying a photo collage. The mouse is on the right side of the desk, next to the lamp. The lamp is on the right side of the desk, next to the computer. The glass of water is on the left side of the desk, next to the books.",
        "Dominant_Colors": ["white", "gray", "black", "brown"],
        "Contextual_Analysis": "The image depicts a workspace with a laptop computer and other office supplies. The setting is indoors and the time of day is unknown. The mood conveyed is calm and organized.",
        "Text_Recognition": 
        []
      }
    ]
  },
  {
    "creativeID": 4653,
    "campaignName": "Urban Retreats",
    "creativegraphic": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Your Urban Oasis",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Tranquility of Resort Living, Right in the City",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Imagine stepping into a world of serenity, where lush greenery meets sparkling pools and modern comfort. Our urban retreat offers an escape from the hustle and bustle, without leaving the city's pulse. Unwind by the pool, soak in the warm glow of the setting sun, and rediscover the art of relaxation. Book your stay today and embrace the peaceful luxury of urban living.",
    "Analysis": [
      {
        "Content_Description": "A resort style building with a swimming pool in front of it. The building is made of wood and has a white exterior. There are palm trees surrounding the building and the pool. The sky is a dark blue with a few clouds. The sun is setting, casting a warm glow on the scene.",
        "Dominant_Colors": ["blue", "white", "brown", "green"],
        "Contextual_Analysis": "Setting, outdoors, Time of day, dusk, Mood, peaceful",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3450,
    "campaignName": "Island Retreat",
    "creativegraphic": "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Your Private Oasis",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Discover Tranquility in Our Island Retreat",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Step into a world of relaxation and rejuvenation at our Island Retreat. Our meticulously designed accommodations offer a serene sanctuary, where the only sounds you'll hear are the gentle whispers of the ocean breeze. Indulge in the ultimate escape, where every detail is curated to create an unforgettable experience.",
    "Analysis": [
      {
        "Content_Description": "A long hallway with doors on both sides. The hallway is lit by overhead lights and the floor is tiled. The walls are a light yellow color, and the doors are a dark brown.",
        "Dominant_Colors": ["brown", "yellow", "white"],
        "Contextual_Analysis": "The image depicts a hallway in a hotel or other building. The setting is indoors and the mood is calm and quiet.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5895,
    "campaignName": "Island Retreat",
    "creativegraphic": "https://images.pexels.com/photos/3554424/pexels-photo-3554424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Escape to Your Island Oasis",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Unwind in Luxurious Comfort",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Imagine waking up to breathtaking views, cozying up by a crackling fireplace, and spending quality time with your furry friend in a modern, minimalist retreat. Our island haven offers the perfect escape for relaxation and rejuvenation. Embrace the tranquility of nature while indulging in luxury accommodations and personalized amenities. Book your island getaway today and discover the ultimate escape.",
    "Analysis": [
      {
        "Content_Description": "A dog is lying on a bed in a modern living room. The room has large windows with views of the outdoors, a fireplace, and a sectional sofa. The dog is brown and white and is lying on its side. The bed is white with a gray blanket on it. The room is decorated in a minimalist style.",
        "Dominant_Colors": ["white", "gray", "brown"],
        "Contextual_Analysis": "The image depicts a modern living room with a comfortable and cozy atmosphere. The large windows suggest a spacious and airy environment. The presence of a dog adds a sense of warmth and homeliness.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4469,
    "campaignName": "Island Retreat",
    "creativegraphic": "https://images.pexels.com/photos/2842886/pexels-photo-2842886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Island Retreat Awaits",
    "Body_Size": "16px",
    "Body_Font": "Arial",
    "Body_Color": "pink",
    "Body_Text": "Indulge in the tropical bliss of our island retreat.",
    "Analysis": [
      {
        "Content_Description": "A man is stirring a pink cocktail with a wooden stick. He is wearing a white shirt and a green apron. The cocktail is in a tall glass and is sitting on a black mat. There are bottles of liquor on the shelves behind him.",
        "Dominant_Colors": ["brown", "white", "pink", "green"],
        "Contextual_Analysis": "The image shows a bartender mixing a drink. The setting is a bar or restaurant. The mood is relaxed and casual.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8033,
    "campaignName": "Island Retreat",
    "creativegraphic": "https://images.pexels.com/photos/6782439/pexels-photo-6782439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "gray",
    "Heading_Text": "Escape to Your Private Island Retreat",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience Unparalleled Luxury and Relaxation",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine waking up to breathtaking city views from the comfort of your own private sanctuary. Our meticulously designed suites offer a haven of tranquility, where you can unwind and reconnect with yourself. Indulge in plush bedding, contemporary furnishings, and stunning panoramic vistas. Our Island Retreat is more than just a destination; it's an escape from the ordinary, a journey to rediscover your inner peace. Book your stay today and let us pamper you with unparalleled luxury and personalized service.",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a bed, a chair, and two windows. The bed has a gray duvet and a few pillows. The chair is gray and is positioned next to a window. There are two windows in the room, both with a view of the city outside. The walls are white and there is a black framed picture hanging on the wall. The ceiling has a light fixture.",
        "Dominant_Colors": ["white", "gray", "brown"],
        "Contextual_Analysis": "The image shows a modern bedroom in a city apartment. The room is well-lit and the windows provide a view of the cityscape. The room is decorated in a minimalist style, with a focus on clean lines and neutral colors. The mood of the image is calm and serene.",
        "Text_Recognition": ["MAKE PEOPLE HAPPY"]
      }
    ]
  },
  {
    "creativeID": 4396,
    "campaignName": "Island Retreat",
    "creativegraphic": "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Your Island Retreat",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Indulge in Sweet Potato Fries with a Tropical Twist",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape to your own private island paradise with our delicious sweet potato fries.Our fries are made with the freshest ingredients and topped with a variety of delicious and vibrant flavors, like chili, guacamole, sour cream, tomatoes, and cilantro. Each bite is a taste of the tropics, perfect for a relaxing and rejuvenating experience.",
    "Analysis": [
      {
        "Content_Description": "The image shows two plates of sweet potato fries with various toppings. The toppings include chili, guacamole, sour cream, tomatoes, and cilantro. There are also several bowls of ingredients, including sour cream, chopped vegetables, and guacamole. The image is set on a light pink surface.",
        "Dominant_Colors": ["white", "brown", "green", "red"],
        "Contextual_Analysis": "The image is a food photography shot, likely for a recipe or blog post. The setting is indoors, and the mood is fresh and appetizing.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 9259,
    "campaignName": "City Breaks",
    "creativegraphic": "https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Unwind in Luxury at Our Tropical Resort",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in the tranquility of our overwater bungalows, where breathtaking sunsets and crystal-clear waters create an unforgettable escape. Indulge in unparalleled luxury, personalized service, and a haven of relaxation. Book your dream city break today.",
    "Analysis": [
      {
        "Content_Description": "An aerial view of a tropical resort with multiple bungalows built on stilts over the clear blue water. The bungalows are connected by wooden walkways, and there is a small pool in front of one of the bungalows. The sun is setting in the distance, casting a warm glow over the scene.",
        "Dominant_Colors": ["blue", "brown", "white"],
        "Contextual_Analysis": "The image depicts a tranquil and luxurious resort setting at sunset. The warm colors and calm water create a serene and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3687,
    "campaignName": "City Breaks",
    "creativegraphic": "https://images.pexels.com/photos/1267306/pexels-photo-1267306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Discover Your Perfect City Getaway",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Indulge in the vibrant energy of the city. Explore hidden gems, savor delicious cuisine, and create lasting memories.",
    "Analysis": [
      {
        "Content_Description": "A glass of dark beer sits on a bar counter in front of a wall of beer taps. There are several chalkboards with beer names on them hanging behind the taps.",
        "Dominant_Colors": ["brown", "black", "white", "gray"],
        "Contextual_Analysis": "The image depicts a bar or pub setting, possibly at night. The mood is relaxing and inviting. ",
        "Text_Recognition": ["Love", "Lemon Ginger Shiner", "Staycation", "Main Deal", "Tasty", "Montie Mills", "Yards Brewing"]
      }
    ]
  },
  {
    "creativeID": 9079,
    "campaignName": "City Breaks",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Urban Oasis",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "City Breaks: Where Luxury Meets Exploration",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Indulge in the cosmopolitan allure of city life with our curated collection of urban escapes. From chic boutique hotels to modern havens, experience the perfect blend of comfort and convenience. Explore vibrant streets, savor gourmet delights, and immerse yourself in the pulse of the city. Every detail, from stylish interiors to prime locations, is designed to elevate your urban adventure. Book your city break today and discover the magic of urban living.",
    "Analysis": [
      {
        "Content_Description": "A modern bedroom with a large bed, a rug, a chair, a desk and a window.",
        "Dominant_Colors": ["brown", "white", "beige", "black"],
        "Contextual_Analysis": "The bedroom is modern and stylish, with a neutral color palette. The large window suggests that the room is well-lit during the day. The setting is indoors and the time of day is likely daytime.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7985,
    "campaignName": "City Breaks",
    "creativegraphic": "https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Indulge in the Nightlife",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the vibrant energy of the city with our curated city breaks. From luxury accommodations to unforgettable nightlife experiences, we've got you covered. Let us help you create memories that will last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "The image shows a bar with a wooden counter and shelves full of liquor bottles. There are three bar stools with green velvet seats in front of the counter. The bar is lit by hanging lights with glass shades. The ceiling is also wood panelled.",
        "Dominant_Colors": ["brown", "black", "green", "white"],
        "Contextual_Analysis": "The image depicts a dimly lit bar with a warm and inviting atmosphere, likely at night or in the evening.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5455,
    "campaignName": "City Breaks",
    "creativegraphic": "https://images.unsplash.com/photo-1572177215152-32f247303126?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "gray",
    "Heading_Text": "Escape to the City",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Find Your Urban Oasis",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Unwind in our modern and stylish hotel rooms, designed for relaxation and comfort. Enjoy breathtaking city views, plush bedding, and thoughtful amenities to make your stay unforgettable.",
    "Analysis": [
      {
        "Content_Description": "A hotel room with a bed, a chair, and a few framed pictures on the wall. The bed has a gray blanket and two pillows. The chair is white and is facing the bed. The pictures are black and white and show a forest, a building, and a plant.",
        "Dominant_Colors": ["gray", "white", "black"],
        "Contextual_Analysis": "The image depicts a hotel room, likely in a modern hotel. The setting is indoors and the time of day is likely evening or night, as the lights are on and the curtains are drawn. The mood conveyed is one of relaxation and comfort.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 9342,
    "campaignName": "City Breaks",
    "creativegraphic": "https://images.pexels.com/photos/2179666/pexels-photo-2179666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Discover Ancient Wonders",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Uncover the History",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Embark on a journey through time with our City Breaks campaign. Explore ancient civilizations and marvel at architectural wonders. Book your escape today and experience the magic of history firsthand.",
    "Analysis": [
      {
        "Content_Description": "A carved sandstone facade with multiple openings and recesses, possibly a tomb or temple, is situated against a backdrop of a bright sky with white clouds. The sun shines brightly from behind the structure, casting a warm glow over the scene.",
        "Dominant_Colors": ["brown", "white", "blue", "yellow"],
        "Contextual_Analysis": "Setting, outdoors, Time of Day, day, Mood, peaceful",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 2390,
    "campaignName": "Adventure Awaits",
    "creativegraphic": "https://images.pexels.com/photos/19328227/pexels-photo-19328227/free-photo-of-illuminated-wave-swinger-carousel-on-a-christmas-market.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "orange",
    "Heading_Text": "Adventure Awaits",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Embrace the magic of the season.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Discover a world of winter wonder at our enchanting destination. From sparkling lights and festive cheer to thrilling activities and cozy moments, unforgettable experiences await you. Let the carousel of joy spin you into a winter wonderland. Book your escape today and let the adventure begin!",
    "Analysis": [
      {
        "Content_Description": "A brightly lit carousel with people standing around it. The carousel is decorated with intricate designs and lights. The people are wearing winter clothes and some are holding onto the carousels poles.",
        "Dominant_Colors": ["orange", "black", "white", "brown"],
        "Contextual_Analysis": "The image captures a festive atmosphere, likely at a winter fair or carnival. The bright lights and the crowd of people suggest a fun and lively event.",
        "Text_Recognition": ["Willkommen"]
      }
    ]
  },
  {
    "creativeID": 3079,
    "campaignName": "Adventure Awaits",
    "creativegraphic": "https://images.unsplash.com/photo-1549416878-30862a3e49e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Adventure Awaits",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Escape the Ordinary, Embrace the Extraordinary",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine waking up to breathtaking views and the promise of new experiences. Your next adventure starts with us. Explore our curated collection of destinations, designed to ignite your wanderlust and create memories that last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "A living room with a large window that is open, allowing sunlight to stream in. There is a table with two chairs in the center of the room. The table is set with a vase of flowers. There is a painting on the wall behind the table. The floor is made of wood.",
        "Dominant_Colors": ["brown", "white", "green"],
        "Contextual_Analysis": "The image depicts a living room in a home. The setting is indoors, and the time of day is likely daytime, as the sun is shining through the window. The mood conveyed by the image is one of peace and tranquility.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7927,
    "campaignName": "Adventure Awaits",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1681495135418-9ebdca346523?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Adventure Awaits",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Unforgettable Memories, Right at Your Fingertips",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "tan",
    "Body_Text": "Escape the ordinary and embrace the extraordinary with our curated selection of unique travel experiences. From breathtaking beaches to thrilling adventures, we have something for every traveler.Book your adventure today and let us create unforgettable memories for you.",
    "Analysis": [
      {
        "Content_Description": "Two women are sitting on a beach taking a selfie. The woman on the left is wearing a striped bathing suit and the woman on the right is wearing a white tank top and sunglasses. They are both smiling and looking at the camera.",
        "Dominant_Colors": ["blue", "white", "brown", "tan"],
        "Contextual_Analysis": "The image is set on a beach at sunset. The women are enjoying their time together and having fun taking a selfie. ",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7482,
    "campaignName": "Adventure Awaits",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Adventure Awaits:",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Unwind in Luxury",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "grey",
    "Body_Text": "Escape the ordinary and embrace the extraordinary. Immerse yourself in a world of comfort and elegance where every detail is meticulously crafted for your ultimate relaxation. Our luxurious accommodations offer a sanctuary of tranquility, where breathtaking city views and cozy fireplaces create an ambiance of pure bliss. Indulge in the softest sheets, the finest amenities, and the unparalleled service that defines our commitment to exceeding your expectations. Let adventure await you in a haven of luxury.",
    "Analysis": [
      {
        "Content_Description": "The image shows a luxurious bedroom with a circular bed in the center, a large window with a view of a city skyline, and a fireplace on the left side of the room. The bed is covered in white sheets and has a variety of pillows. There are two lamps on either side of the bed, and a small table with a tray of drinks on it. There is also a large mirror on the wall behind the bed. The room is decorated in a modern style with a light color palette.",
        "Dominant_Colors": ["white", "grey", "brown", "beige"],
        "Contextual_Analysis": "The image depicts a luxurious bedroom. The room is decorated in a modern style with a light color palette. The setting is indoors and the time of day is either daytime or evening. The mood conveyed is one of relaxation and luxury.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 9917,
    "campaignName": "Adventure Awaits",
    "creativegraphic": "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Adventure Awaits",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Escape to Your Own Private Paradise",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a haven of tranquility and luxury. Our exclusive properties offer a seamless blend of modern design and outdoor bliss. Unwind by the shimmering pool, surrounded by lush greenery, and experience the ultimate retreat from the ordinary.",
    "Analysis": [
      {
        "Content_Description": "A modern, white house with a swimming pool in the backyard. The pool is surrounded by a wooden deck and there are some plants and a lounge area with chairs. The house has large windows that let in a lot of natural light. The sky is blue and there are some clouds.",
        "Dominant_Colors": ["white", "blue", "brown"],
        "Contextual_Analysis": "The image depicts a modern and luxurious home with a backyard oasis. The bright colors and clear lines suggest a relaxed and enjoyable atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 2823,
    "campaignName": "Romantic Retreats",
    "creativegraphic": "https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Find Your Inner Peace",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Escape to Serenity",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Immerse yourself in the breathtaking beauty of a sacred destination. Our curated retreats offer a sanctuary for reflection, rejuvenation, and spiritual growth.Experience the transformative power of prayer, pilgrimage, and connection with the divine. Discover a deeper sense of peace and purpose amidst the serene surroundings. ",
    "Analysis": [
      {
        "Content_Description": "A large statue of Jesus Christ stands on a hilltop overlooking a city and ocean. The statue is facing forward with arms outstretched, and a crowd of people are gathered around the base. The city is in the background, and the ocean is in the distance.",
        "Dominant_Colors": ["blue", "brown", "green", "white"],
        "Contextual_Analysis": "The image depicts a religious setting, likely a pilgrimage site or a place of worship. The mood is one of reverence and awe.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7730,
    "campaignName": "Eco-Friendly Getaways",
    "creativegraphic": "https://images.unsplash.com/photo-1718927118103-f2a1c12349d9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Sustainable Serenity",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Eco-Friendly Getaways Await",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a world of blissful relaxation and responsible travel. Our eco-friendly resorts offer breathtaking coastal views, serene beaches, and a commitment to sustainable practices. Indulge in guilt-free luxury while making a positive impact on the environment. Book your eco-conscious escape today and reconnect with nature.",
    "Analysis": [
      {
        "Content_Description": "A beach scene with people relaxing on beach chairs under an umbrella. In the background, a mountain with a statue on top can be seen, along with a cityscape.",
        "Dominant_Colors": ["blue", "green", "white", "brown", "sand"],
        "Contextual_Analysis": "The image captures a sunny day on a beach, with a relaxed and peaceful atmosphere. The presence of the statue and cityscape suggests a coastal city environment.",
        "Text_Recognition": ["Blusde"]
      }
    ]
  },
  {
    "creativeID": 4947,
    "campaignName": "Eco-Friendly Getaways",
    "creativegraphic": "https://images.unsplash.com/photo-1718927111065-4bfab7d50a82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Sustainability",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Eco-Friendly Getaways Await",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Discover serene beaches, breathtaking landscapes, and sustainable practices at our eco-conscious resorts. Indulge in nature's beauty while making a positive impact on the environment. Book your eco-friendly getaway today and experience the harmony of travel and sustainability.",
    "Analysis": [
      {
        "Content_Description": "A yellow and blue beach stand with a sign that says Mikes is located on a paved pathway next to a beach with a mountain in the distance. There are people walking in both directions on the path.",
        "Dominant_Colors": ["blue", "yellow", "green", "brown"],
        "Contextual_Analysis": "The image is a sunny day scene on a beach with people walking on a paved path next to a stand. The mountain in the background suggests a tropical or coastal setting.",
        "Text_Recognition": ["Mikes"]
      }
    ]
  },
  {
    "creativeID": 4835,
    "campaignName": "Eco-Friendly Getaways",
    "creativegraphic": "https://images.unsplash.com/photo-1573548998489-193601b0b4f5?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Dive into Sustainable Luxury",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Eco-Friendly Getaways for the Adventurous Soul",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape to pristine beaches and crystal-clear waters, knowing your vacation is leaving a positive footprint. Our eco-conscious resorts offer unforgettable experiences while minimizing our impact on the environment. Dive into sustainability and discover a world of tranquility, adventure, and responsible luxury.",
    "Analysis": [
      {
        "Content_Description": "Two people are wearing scuba gear and smiling at the camera while floating in the clear blue water. They are in front of a white building and palm trees. The water is very shallow and the sand is visible in the background.",
        "Dominant_Colors": ["blue", "white"],
        "Contextual_Analysis": "The image is set on a tropical beach on a sunny day. The mood is relaxed and fun. The people appear to be on vacation and enjoying themselves.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7270,
    "campaignName": "Eco-Friendly Getaways",
    "creativegraphic": "https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?q=80&w=1553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Eco-Friendly Venice",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience Sustainable Luxury in the City of Canals",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Immerse yourself in the timeless charm of Venice while making a conscious choice for the planet. Our curated selection of eco-friendly hotels and experiences allows you to explore the city's iconic canals and romantic atmosphere without compromising on sustainability. Discover authentic Venetian craftsmanship, savor delectable local cuisine sourced from sustainable practices, and embrace a journey that leaves a positive impact on the environment.",
    "Analysis": [
      {
        "Content_Description": "The image shows a canal in Venice, Italy, with gondolas and buildings on either side. There are people in the gondolas, and the canal is filled with water. The sky is blue with some clouds.",
        "Dominant_Colors": ["blue", "white", "red", "brown", "black"],
        "Contextual_Analysis": "The image captures a beautiful scene of Venice, with the iconic gondolas gliding through the canals. The warm tones of the buildings and the clear blue sky create a peaceful and romantic atmosphere. The setting is outdoors, and the time of day appears to be late afternoon or early evening.",
        "Text_Recognition": [
          "The text on the building says Fondamenta de la Prison."
        ]
      }
    ]
  },
  {
    "creativeID": 7828,
    "campaignName": "Staycation Extravaganza",
    "creativegraphic": "https://images.unsplash.com/photo-1545438102-799c3991ffb2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "pink",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Unwind. Relax. Rejuvenate.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Indulge in a luxurious staycation experience, complete with handcrafted cocktails and a serene ambiance. Our expert mixologists have curated a selection of refreshing drinks, perfect for escaping the everyday and embracing the extraordinary.Enjoy the vibrant energy of our bar and let us take care of your every need.",
    "Analysis": [
      {
        "Content_Description": "Two cocktails, one pink and one clear, sit on a dark surface with scattered flower petals. The pink cocktail is in a stemmed glass and has lemon slices and a sprig of flowers in it. The clear cocktail is in a rocks glass with ice cubes and a lemon twist.",
        "Dominant_Colors": ["pink", "yellow", "black"],
        "Contextual_Analysis": "The image depicts a still life of two cocktails, likely in a bar or restaurant setting, with a dark and moody atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4568,
    "campaignName": "Staycation Extravaganza",
    "creativegraphic": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "green",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Your Staycation Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Indulge in a refreshing escape without leaving the city. Our Staycation Extravaganza offers luxurious amenities, exquisite dining experiences, and rejuvenating spa treatments. Unwind with a handcrafted cocktail by our expert mixologists or simply relax in our serene courtyard. Discover the perfect balance of relaxation and adventure right in your own backyard.",
    "Analysis": [
      {
        "Content_Description": "A glass of sparkling water is being poured from a bottle. The glass is filled with ice and fresh mint leaves. A lime wedge is also in the glass. There are other limes and mint leaves on the table around the glass.",
        "Dominant_Colors": ["green", "white", "brown"],
        "Contextual_Analysis": "The image depicts a refreshing drink being prepared. The setting is likely a kitchen or dining area, and the mood is one of relaxation and enjoyment.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5883,
    "campaignName": "Staycation Extravaganza",
    "creativegraphic": "https://images.unsplash.com/photo-1659037787192-ee2a4823cdde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "green",
    "Heading_Text": "Indulge in Your Dream Staycation",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Breakfast in Bed, Bliss in Every Bite",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "yellow",
    "Body_Text": "Escape the ordinary and treat yourself to an unforgettable staycation. Wake up to gourmet breakfast delights, like our mouthwatering waffle stacks, delivered straight to your room.Unwind in luxurious comfort, explore nearby attractions, and create lasting memories without leaving the city.",
    "Analysis": [
      {
        "Content_Description": "A person is eating a waffle with bacon and a fried egg. They are pouring syrup on the waffle. There is a plate with more waffles in front of them.",
        "Dominant_Colors": ["green", "brown", "yellow"],
        "Contextual_Analysis": "The image depicts a person eating breakfast at a restaurant.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6737,
    "campaignName": "Staycation Extravaganza",
    "creativegraphic": "https://images.unsplash.com/photo-1516788875874-c5912cae7b43?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Your Staycation Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a luxurious staycation experience, right in your own city. ",
    "Analysis": [
      {
        "Content_Description": "A waiter is carrying a tray with drinks, including glasses of champagne, a pitcher of water, and two cocktails. The waiter is wearing a white shirt and is walking through a crowded area.",
        "Dominant_Colors": ["white", "red", "yellow", "brown"],
        "Contextual_Analysis": "The image appears to be taken outdoors, possibly in a busy city or tourist area. The waiter is likely serving drinks to customers in a restaurant or cafe.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 2019,
    "campaignName": "Family Adventure",
    "creativegraphic": "https://images.pexels.com/photos/3025096/pexels-photo-3025096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Family Adventure: Where Memories Are Made",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Unleash the Excitement, Create Lasting Bonds",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Experience the electrifying energy of a live event, where laughter, thrills, and unforgettable memories come together. Our Family Adventure campaign offers a diverse range of experiences that cater to every member of your family, creating a bond that will last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "A large crowd of people are gathered in an arena, watching a performance on stage. The stage is lit with bright lights, and the audience is cheering and waving their hands in the air. The image is taken from a high angle, looking down at the crowd.",
        "Dominant_Colors": ["red", "pink", "purple", "yellow", "blue"],
        "Contextual_Analysis": "The image captures the excitement and energy of a live concert or event. The setting is an indoor arena, and the time of day is likely evening or night. The mood conveyed is one of excitement and anticipation.",
        "Text_Recognition": [
          "THRILLA IN MANILA"
        ]
      }
    ]
  },
  {
    "creativeID": 6202,
    "campaignName": "Family Adventure",
    "creativegraphic": "https://images.pexels.com/photos/24600795/pexels-photo-24600795/free-photo-of-ara-libertad-in-port-in-argentina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Set Sail for Family Adventures",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Create Unforgettable Memories on the High Seas",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Embark on a journey of discovery and laughter with our family-friendly cruises. Explore breathtaking destinations, enjoy onboard activities, and create lasting memories together. Our ships are designed for families, offering spacious cabins, delicious dining, and a wide range of entertainment options. Let us take care of the details, so you can focus on spending quality time with your loved ones. Book your family adventure today!",
    "Analysis": [
      {
        "Content_Description": "A large white sailing ship is docked at a harbor.  There are many people on the ship and on the dock.  The ship is flying many flags.  There are buildings on the other side of the harbor.",
        "Dominant_Colors": ["blue", "white", "green", "brown"],
        "Contextual_Analysis": "The image shows a ship in a harbor. The ship is flying many flags, which suggests that it may be a special occasion. The time of day is likely daytime, as the sky is blue and the sun is shining.  The mood of the image is festive and celebratory.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6974,
    "campaignName": "Family Adventure",
    "creativegraphic": "https://images.pexels.com/photos/4825721/pexels-photo-4825721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Unwind & Explore: Family Adventures Await",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "tan",
    "Sub_Heading_Text": "Create Unforgettable Memories Under the Stars",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Escape to our idyllic beachside retreat, where the gentle ocean breeze whispers tales of adventure. Immerse yourselves in nature's embrace, creating lasting memories within the cozy confines of our luxurious tents. Unwind on plush beds, soak in the breathtaking panoramic views, and embark on exciting explorations along the pristine coastline. Our Family Adventure package offers the perfect blend of relaxation and excitement, ensuring an unforgettable experience for all.",
    "Analysis": [
      {
        "Content_Description": "The image shows the interior of a tent with a view of the ocean. The tent is made of brown canvas and has a wooden frame. There is a bed in the foreground with a blanket on it. In the background, there is a wooden deck with two chairs and a table. The ocean is visible through the open flap of the tent.",
        "Dominant_Colors": ["brown", "tan", "blue"],
        "Contextual_Analysis": "The image is set in a tent on a beach. It is likely daytime, as the sun is shining and the ocean is visible. The mood is peaceful and relaxing.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5897,
    "campaignName": "Family Adventure",
    "creativegraphic": "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "White",
    "Heading_Text": "Escape to Tranquility",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Gray",
    "Sub_Heading_Text": "Family Adventure Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "Black",
    "Body_Text": "Immerse yourself in the serene beauty of traditional Japanese landscapes. Our curated family adventures offer the perfect escape from the everyday hustle. Find peace and reconnect with loved ones amidst breathtaking scenery and tranquil surroundings.",
    "Analysis": [
      {
        "Content_Description": "A traditional Japanese torii gate stands in the middle of a calm lake, with a mountain range in the distance. The image is in black and white, creating a serene and minimalist aesthetic.",
        "Dominant_Colors": ["White", "Gray", "Black"],
        "Contextual_Analysis": "The image conveys a sense of peace and tranquility. The minimalist composition and monochrome palette enhance the serene atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3295,
    "campaignName": "Wellness Escape",
    "creativegraphic": "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "black",
    "Sub_Heading_Text": "Rediscover Yourself in a World of Tranquility",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape the everyday and embark on a journey of rejuvenation. Our curated wellness retreats offer an unparalleled experience, designed to revitalize your mind, body, and soul.",
    "Analysis": [
      {
        "Content_Description": "Two people are holding up US passports in front of a building. The person on the left is wearing a yellow jacket, and the person on the right is wearing a black jacket. The passports are in focus, and the people and the background are out of focus.",
        "Dominant_Colors": ["blue", "black", "white", "yellow"],
        "Contextual_Analysis": "The image depicts a scene of travel and adventure. The passports, the people, and the city in the background all suggest that the people are about to embark on a journey.",
        "Text_Recognition": ["PASSPORT", "United States of America"]
      }
    ]
  },
  {
    "creativeID": 9548,
    "campaignName": "Wellness Escape",
    "creativegraphic": "https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "Purple",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Blue",
    "Sub_Heading_Text": "Your Wellness Oasis Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "Black",
    "Body_Text": "Discover a sanctuary where rejuvenation meets vibrant energy. Our exclusive wellness retreat blends serene moments with invigorating experiences, allowing you to reconnect with your inner peace and rediscover your true self.",
    "Analysis": [
      {
        "Content_Description": "A DJ is mixing music on a soundboard in a nightclub. He is wearing headphones and a black t-shirt. There are blue and purple lights in the background. A disco ball hangs from the ceiling. ",
        "Dominant_Colors": ["black", "blue", "purple"],
        "Contextual_Analysis": "The image depicts a DJ mixing music in a nightclub. The setting is a dark room with blue and purple lights. The mood is energetic and festive.",
        "Text_Recognition": ["Pioneer DJ"]
      }
    ]
  },
  {
    "creativeID": 6948,
    "campaignName": "Wellness Escape",
    "creativegraphic": "https://images.pexels.com/photos/1267693/pexels-photo-1267693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "teal",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Reconnect, Recharge, Revive",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a bespoke wellness experience tailored to your needs. ",
    "Analysis": [
      {
        "Content_Description": "Three women are sitting on a bench outside a cafe, two of them are holding glasses of beer. The woman on the right is wearing a teal skirt and a black top. The woman in the middle is wearing a light blue shirt and black jeans. The woman on the left is wearing a white t-shirt and blue jeans. They are all smiling and appear to be enjoying each others company.",
        "Dominant_Colors": ["teal", "blue", "white", "black"],
        "Contextual_Analysis": "The image is set outdoors at a cafe. The time of day is likely afternoon or evening. The mood is relaxed and friendly.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4628,
    "campaignName": "Wellness Escape",
    "creativegraphic": "https://images.pexels.com/photos/3536274/pexels-photo-3536274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Find Your Rhythm in Our Vibrant Escape",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Trade the daily grind for an electrifying experience.Our vibranthospitality offers a pulse-pounding atmosphere where you can let loose and find your rhythm.Unwind, connect, and discover a world of excitement within our walls.",
    "Analysis": [
      {
        "Content_Description": "A black and white photo of a crowded nightclub with people dancing and a DJ playing music. There are people standing and dancing in the foreground and a DJ booth with a DJ behind it in the background. The DJ booth is decorated with stickers and graffiti.",
        "Dominant_Colors": ["black", "white", "gray"],
        "Contextual_Analysis": "The image captures the atmosphere of a lively nightclub, with people enjoying themselves and dancing to music. The setting is a dark and dimly lit room with a DJ booth at the front. The time of day is likely nighttime, as the room is lit by artificial lights. The mood conveyed is one of excitement and energy.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4178,
    "campaignName": "Wellness Escape",
    "creativegraphic": "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Tranquility",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Find Your Inner Peace",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a wellness escape at our serene retreat. Our meticulously designed dining rooms offer a tranquil ambiance, where natural light bathes the space in a peaceful glow.Escape the ordinary and reconnect with yourself amidst the calming beauty of our surroundings.Enjoy gourmet meals crafted with fresh, locally sourced ingredients, all while fostering a sense of calm and rejuvenation.",
    "Analysis": [
      {
        "Content_Description": "A dining room with a wooden table and white chairs. There is a large window in the background that looks out onto a backyard. The table is set with a vase of flowers, a pitcher of water, and a teapot. The room is lit by a chandelier with multiple glass bulbs.",
        "Dominant_Colors": ["brown", "white", "green", "black"],
        "Contextual_Analysis": "The image is of a dining room, likely in a home. The setting is indoors, and the time of day is likely daytime, as sunlight is streaming in through the window. The mood conveyed is one of peace and serenity.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 2670,
    "campaignName": "Weekend Wonders",
    "creativegraphic": "https://images.pexels.com/photos/24461269/pexels-photo-24461269/free-photo-of-table-and-chairs-in-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Tranquility: Weekend Wonders Await",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Discover the perfect getaway",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Unwind in our beautifully appointed living spaces, bathed in natural light.Experience the ultimate comfort and serenity, surrounded by modern elegance.Your weekend escape awaits.",
    "Analysis": [
      {
        "Content_Description": "The image shows a living room with two large windows, each with sheer curtains. There are two chairs and a small table in the center of the room. A houseplant is situated between the chairs and the windows. The floor is tiled.",
        "Dominant_Colors": ["beige", "brown", "white"],
        "Contextual_Analysis": "The image depicts a well-lit, modern living room with a calming and elegant ambiance.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6135,
    "campaignName": "Weekend Wonders",
    "creativegraphic": "https://images.pexels.com/photos/5864290/pexels-photo-5864290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Weekend Wonders: Your Escape Awaits",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Indulge in Comfort & Flavors",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Escape the ordinary and discover weekend bliss at our charming establishment.",
    "Analysis": [
      {
        "Content_Description": "A wooden table with a barrel as the table top. There is a plate with a sandwich, a plate with french fries and a small bowl of dip and a plate with a salad, a glass of red wine and a glass of beer. The beer glass is labeled with the word Leffe.",
        "Dominant_Colors": ["brown", "white", "black", "red"],
        "Contextual_Analysis": "The scene is set in a restaurant or bar with a rustic, cozy atmosphere. The food and drinks suggest a casual dining experience. ",
        "Text_Recognition": ["Leffe"]
      }
    ]
  },
  {
    "creativeID": 7099,
    "campaignName": "Weekend Wonders",
    "creativegraphic": "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Weekend Wonders",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Unwind and Rejuvenate",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in a world of tranquility at our resort. Our sparkling pool, surrounded by lush palm trees and a serene gazebo, offers the perfect escape from the everyday. Bask in the sun, take a refreshing dip, and let the gentle breeze carry away your worries. Discover your weekend wonder today!",
    "Analysis": [
      {
        "Content_Description": "A swimming pool surrounded by palm trees and a white gazebo with a tiled roof. There are people in the pool and on the deck, and the water is sparkling blue. The scene is sunny and bright, with a clear blue sky in the background.",
        "Dominant_Colors": ["blue", "green", "brown", "white"],
        "Contextual_Analysis": "Setting, outdoors, Time of Day, day, Mood, peaceful and relaxing",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3342,
    "campaignName": "Weekend Wonders",
    "creativegraphic": "https://images.pexels.com/photos/4916534/pexels-photo-4916534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Tranquility",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Weekend Getaway Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a serene escape at our charming courtyard oasis. ",
    "Analysis": [
      {
        "Content_Description": "A small swimming pool in a courtyard. The pool is surrounded by stone tiles and there are several potted plants in the background. The pool is lit by a string of lights hanging from a tree. There is a small wooden table and chairs near the pool.",
        "Dominant_Colors": ["brown", "green", "white"],
        "Contextual_Analysis": "The image appears to be taken in a courtyard or garden setting. The time of day is likely evening or night, as the lights are on and the sky is dark. The mood is serene and peaceful.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6743,
    "campaignName": "Weekend Wonders",
    "creativegraphic": "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "black",
    "Heading_Text": "Weekend Wonders",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "grey",
    "Sub_Heading_Text": "Unwind in Exquisite Ambiance",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Indulge in a culinary journey amidst modern elegance. Our dining room, a haven of sleek design and warm lighting, promises an unforgettable experience.",
    "Analysis": [
      {
        "Content_Description": "A modern dining room with a round table and six chairs. The table is made of dark wood and has a black base. The chairs are upholstered in a grey fabric. There are four light fixtures hanging above the table. The walls are painted black and there are wood panels on either side of the room. There is a window in the background.",
        "Dominant_Colors": ["black", "grey", "brown", "gold"],
        "Contextual_Analysis": "The image depicts a modern dining room that is well-lit and decorated. The setting is indoors, likely in a home or a restaurant. The time of day is likely daytime or evening, as the lighting is warm and inviting. The mood conveyed is one of sophistication and elegance.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 2324,
    "campaignName": "Cultural Discovery",
    "creativegraphic": "https://images.pexels.com/photos/1850592/pexels-photo-1850592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Discover",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "black",
    "Sub_Heading_Text": "Uncover",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Embark",
    "Analysis": [
      {
        "Content_Description": "The image shows a dimly lit bar with a bartender preparing drinks.  There are several bottles of liquor behind the bar, and a customer is sitting at the bar, waiting for their drink.  The bar has a corrugated metal front, and there are several bar stools in front of it.  The customer is sitting at a bar stool, with their back to the camera.  They are wearing a red shirt and have their head down, seemingly in thought.  The bartender is wearing a black shirt and is looking at the customer.  They are holding a shaker in their left hand.  There is a small plant on the bar, and a few glasses are on the counter.  The scene seems to be set in a modern bar.  There is a clock on the wall behind the bar.",
        "Dominant_Colors": ["brown", "black", "yellow", "red", "white"],
        "Contextual_Analysis": "The image depicts a scene in a bar, likely at night. The dim lighting and the presence of alcohol suggest an evening setting. The mood conveyed is relaxed and casual.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 9773,
    "campaignName": "Cultural Discovery",
    "creativegraphic": "https://images.pexels.com/photos/356614/pexels-photo-356614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Discover the Soul of China",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gold",
    "Sub_Heading_Text": "Immerse Yourself in Tradition",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the serenity of a traditional Chinese temple, illuminated by the warm glow of red lanterns. Explore intricate details, witness captivating rituals, and connect with the rich cultural heritage of China. Embark on a journey of cultural discovery, where tradition meets modernity, and ancient wisdom meets contemporary experiences.",
    "Analysis": [
      {
        "Content_Description": "A night time view of a traditional Chinese temple with red lanterns and a statue in front. The temple has a multi-tiered roof with intricate details. The statue is standing on a stone base and is illuminated by the lights from the temple.",
        "Dominant_Colors": ["red", "black", "white", "gold"],
        "Contextual_Analysis": "setting, outdoors, time of day, night, mood, peaceful",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7296,
    "campaignName": "Cultural Discovery",
    "creativegraphic": "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Discover the Flavors of Culture",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Experience Authentic Hospitality",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Gather around the table and immerse yourself in a world of flavors.",
    "Analysis": [
      {
        "Content_Description": "A group of people are sitting around a wooden table, eating and drinking. The table is set with plates of food, glasses of water, and a pitcher of water. There are also some breadsticks on a cutting board. The people are wearing casual clothing and appear to be enjoying their meal.",
        "Dominant_Colors": ["brown", "white", "green"],
        "Contextual_Analysis": "The image depicts a casual gathering of friends or family enjoying a meal together. The setting is likely a dining room or kitchen, and the mood is relaxed and convivial.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8977,
    "campaignName": "Cultural Discovery",
    "creativegraphic": "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Experience the Culinary Heart of Your Destination",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Discover a World of Flavors in Our Exquisite Kitchens",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Our meticulously designed kitchens are a haven for culinary enthusiasts, offering a seamless blend of functionality and elegance.",
    "Analysis": [
      {
        "Content_Description": "A modern kitchen with white cabinets and a stainless steel refrigerator. There is a large island in the center of the room with a white countertop and two bar stools. The kitchen is lit by recessed lighting and a chandelier over the island. There are flowers in a vase on the island.",
        "Dominant_Colors": ["white", "gray", "brown", "silver"],
        "Contextual_Analysis": "The image depicts a modern kitchen. It is likely a high-end kitchen, as evidenced by the sleek appliances and high-quality finishes. The kitchen is well-lit and inviting, suggesting a comfortable and functional space.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4187,
    "campaignName": "Escape to Paradise",
    "creativegraphic": "https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "pink",
    "Sub_Heading_Text": "Where the Music Never Stops",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Unwind in a vibrant atmosphere, where the rhythm of the night is your soundtrack. Join us for an unforgettable experience, fueled by electrifying beats and an energy that never fades. Escape to Paradise, where the party never ends.",
    "Analysis": [
      {
        "Content_Description": "Two people are dancing in a dimly lit room. The man is wearing a blue and pink patterned shirt and headphones. The woman is wearing a white tank top and black shorts. They are both smiling and looking at each other.",
        "Dominant_Colors": ["blue", "pink", "white", "black"],
        "Contextual_Analysis": "The image depicts a party or concert setting. The mood is energetic and fun.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4856,
    "campaignName": "Escape to Paradise",
    "creativegraphic": "https://images.pexels.com/photos/8085338/pexels-photo-8085338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "White",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Blue",
    "Sub_Heading_Text": "Your Tropical Oasis Awaits",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "Green",
    "Body_Text": "Imagine waking up to the gentle sounds of the ocean, the warm sun on your skin, and the breathtaking beauty of a tropical paradise. Escape to a world of relaxation and rejuvenation, where every moment is filled with serenity and endless possibilities. Our resort offers luxurious accommodations, pristine beaches, sparkling pools, and a world-class spa, all designed to create an unforgettable experience.Book your escape today and rediscover the joy of living.",
    "Analysis": [
      {
        "Content_Description": "A white building with a palm tree in front of it. There is a swimming pool in the foreground.",
        "Dominant_Colors": ["white", "blue", "green"],
        "Contextual_Analysis": "The image depicts a tropical resort or hotel. The setting is outdoors, likely in a tropical climate. The time of day is daytime, as the sky is bright blue and the sun is shining. The mood conveyed is relaxing and peaceful.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 1616,
    "campaignName": "Escape to Paradise",
    "creativegraphic": "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Indulge in Tropical Bliss",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a culinary oasis amidst lush greenery and warm hospitality. ",
    "Analysis": [
      {
        "Content_Description": "The image shows an indoor restaurant with wooden tables and chairs. The restaurant is decorated with plants and vines hanging from the ceiling. There are several tables set with white tablecloths and yellow napkins. The chairs are made of woven wicker. There are also some candles on the tables. The restaurant has a warm and inviting atmosphere.",
        "Dominant_Colors": ["brown", "yellow", "white"],
        "Contextual_Analysis": "The image depicts a restaurant setting, likely in a tropical or jungle-themed environment. The warm lighting and lush greenery create a cozy and inviting atmosphere. It is likely evening or night time, as the lighting suggests artificial illumination.",
        "Text_Recognition": [
          "None"
        ]
      }
    ]
  },
  {
    "creativeID": 5797,
    "campaignName": "Escape to Paradise",
    "creativegraphic": "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Brown",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Beige",
    "Sub_Heading_Text": "Find Your Sanctuary",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "Cream",
    "Body_Text": "Discover a haven of relaxation and tranquility, where cozy interiors and curated amenities create an atmosphere of blissful escape. Unwind in our luxurious accommodations and indulge in moments of pure bliss. Let our paradise become your sanctuary.",
    "Analysis": [
      {
        "Content_Description": "A cozy living room with a white brick wall, a brown armchair with a patterned pillow, a wooden coffee table with a round ottoman, a tall vase with dried pampas grass, and a shelf with books and decor.",
        "Dominant_Colors": ["brown", "white", "beige", "cream"],
        "Contextual_Analysis": "The image depicts a relaxed and inviting living room setting, likely in a home or cafe. The warm lighting and soft textures contribute to a comfortable and cozy atmosphere.",
        "Text_Recognition": ["GARDEN", "VINTAGE"]
      }
    ]
  },
  {
    "creativeID": 9057,
    "campaignName": "Suite Dreams",
    "creativegraphic": "https://images.pexels.com/photos/2311713/pexels-photo-2311713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "black",
    "Heading_Text": "Suite Dreams: Your Nightlife Oasis",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience Unforgettable Nights",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Get ready to dance the night away with our electrifying nightlife scene.From live music to energetic DJs, we have something for everyone.Our luxurious suites provide the perfect retreat for a night of relaxation and rejuvenation.Book your Suite Dreams experience today and discover the ultimate nightlife paradise.",
    "Analysis": [
      {
        "Content_Description": "A bear mascot wearing sunglasses is dancing in front of a crowd of people at a concert. The bear is wearing a black shirt with a white logo on it and black and white shorts. The people in the crowd are dancing and having a good time. ",
        "Dominant_Colors": ["black", "brown", "blue", "white"],
        "Contextual_Analysis": "The image is set in a concert venue, likely indoors. The time of day is nighttime, and the mood is energetic and lively. ",
        "Text_Recognition": ["No text is present in the image."]
      }
    ]
  },
  {
    "creativeID": 4094,
    "campaignName": "Suite Dreams",
    "creativegraphic": "https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Suite Dreams",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "silver",
    "Sub_Heading_Text": "Unwind in Luxury",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Experience unparalleled comfort and tranquility in our meticulously designed suites.From plush bedding to elegant furnishings, every detail is crafted to ensure a restful and rejuvenating stay. ",
    "Analysis": [
      {
        "Content_Description": "A bedside table with a lamp and a drawer next to a bed with white linens and two pillows. The lamp has a round white shade and a silver base. The bedside table is made of wood and has a white drawer.",
        "Dominant_Colors": ["white", "brown", "silver"],
        "Contextual_Analysis": "The image depicts a hotel room or bedroom. The scene is calm and relaxing, suggesting a place for sleep and rest.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6943,
    "campaignName": "Suite Dreams",
    "creativegraphic": "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "orange",
    "Heading_Text": "Suite Dreams",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Unwind and Rejuvenate",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Indulge in the ultimate escape at our luxurious resort. Immerse yourself in the tranquil ambiance, where vibrant orange bean bags await you by the refreshing blue pool. Surrounded by lush palm trees and a sprawling wooden deck, this idyllic setting promises an unforgettable vacation.Embrace the warm sunshine and let your worries melt away as you sip on a refreshing cocktail and soak in the breathtaking scenery.",
    "Analysis": [
      {
        "Content_Description": "A resort pool with orange bean bags and an orange umbrella. The pool is surrounded by palm trees and a wooden deck.",
        "Dominant_Colors": ["blue", "orange", "green", "brown"],
        "Contextual_Analysis": "The image depicts a relaxing and luxurious setting at a resort. The bright colors and clear blue water create a cheerful and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 58204,
    "campaignName": "Where moments become memories",
    "creativegraphic": "https://images.pexels.com/photos/24740097/pexels-photo-24740097/free-photo-of-people-on-gondolas-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "yellow",
    "Heading_Text": "Where Moments Become Memories",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Experience Venice, One Gondola Ride at a Time",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Escape to the enchanting city of Venice and let the Hotel Cavalletto be your luxurious haven.",
    "Analysis": [
      {
        "Content_Description": "The image shows a canal in Venice, Italy. There are several gondolas in the water, with people riding in them.  The gondolas are docked near a building with a sign that reads Hotel Cavalletto. The building is yellow and has many windows. The sky is blue and there are clouds in the sky.",
        "Dominant_Colors": ["yellow", "blue", "black"],
        "Contextual_Analysis": "The image is set in Venice, Italy, and the time of day is daytime. The mood is peaceful and serene.",
        "Text_Recognition": [
          "Hotel Cavalletto"
        ]
      }
    ]
  },
  {
    "creativeID": 33314,
    "campaignName": "Where moments become memories",
    "creativegraphic": "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Where Moments Become Memories",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Escape to Paradise",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Indulge in the ultimate escape at our tropical resort, where breathtaking views and luxurious amenities create unforgettable memories. Unwind by the sparkling pool, relax under the shade of swaying palms, and savor the tranquility of our serene oasis. Discover a world of relaxation and rejuvenation, where every moment is a cherished memory.",
    "Analysis": [
      {
        "Content_Description": "A large, rectangular swimming pool with a blue tiled bottom is surrounded by a paved deck. Three white umbrellas with black frames are positioned on the deck, each with two black lounge chairs. The pool is situated in a tropical resort setting, with lush green trees and a white building in the background. The sky is bright blue with white clouds.",
        "Dominant_Colors": ["blue", "white", "green"],
        "Contextual_Analysis": "The image depicts a serene and relaxing scene at a tropical resort. The clear blue sky and the calm, still water of the pool create a peaceful ambiance. The lush greenery surrounding the pool suggests a tranquil and secluded setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 86374,
    "campaignName": "Where moments become memories",
    "creativegraphic": "https://images.pexels.com/photos/3101522/pexels-photo-3101522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Where Moments Become Memories",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Energy, Capture the Vibe.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in the electrifying atmosphere of live music, where every beat and every lyric becomes an unforgettable memory. Our venues are the perfect stage for creating moments that will last a lifetime. Join us and let the music move you.",
    "Analysis": [
      {
        "Content_Description": "A large crowd of people are gathered in a concert venue, with a rapper performing on stage in the center. The crowd is cheering and waving their hands in the air. The rapper is wearing a black shirt and a black hat. He is holding a microphone in his right hand and rapping into it. There are other people on the stage, including a DJ and a cameraman. The atmosphere is energetic and exciting.",
        "Dominant_Colors": ["black", "red", "white"],
        "Contextual_Analysis": "The image depicts a concert or live music event. The setting is a dimly lit indoor venue, with a stage and a large crowd of people. The time of day is likely evening or night. The mood conveyed is one of excitement and enthusiasm.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 61764,
    "campaignName": "Where moments become memories",
    "creativegraphic": "https://images.pexels.com/photos/2244441/pexels-photo-2244441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "burgundy",
    "Heading_Text": "Where Moments Become Memories",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Experience Unforgettable Moments at Our Hospitality Venue",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in an electrifying atmosphere where every detail is designed to create lasting memories. From our vibrant performances to our meticulously crafted experiences, we offer a haven for celebration, connection, and unforgettable moments.Our venue is the perfect backdrop for your next event, providing an unparalleled setting for creating memories that will last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "A young woman in a burgundy and green dress is dancing on a stage. She is holding a silver and white streamer in her right hand. There are two other dancers in the background, one in a similar dress and another in a yellow dress. The stage is lit with green and purple lights.",
        "Dominant_Colors": ["burgundy", "green", "yellow", "silver", "white"],
        "Contextual_Analysis": "The image depicts a performance of a dance routine on a stage. The setting is likely indoors, as there are lights and a metal structure in the background.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 59264,
    "campaignName": "Belong Anywhere",
    "creativegraphic": "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Belong",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Taste of Home, Wherever You Are",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Indulge in culinary delights crafted with passion and precision, just like you'd find at home. Our chefs, masters of their craft, bring the flavors of your favorite dishes to life, wherever your travels may take you.Embrace the comfort and familiarity of home-cooked meals, expertly prepared with fresh, local ingredients.Belong Anywhere, starting with the taste of home.",
    "Analysis": [
      {
        "Content_Description": "A chef is preparing a plate of food, which includes mushrooms, herbs, and other ingredients. The food is arranged on a wooden plate, and the chef is using a spoon to add a white sauce to the dish. The dish is surrounded by smoke, and the chef is wearing a white chefs jacket.",
        "Dominant_Colors": ["white", "brown", "green"],
        "Contextual_Analysis": "The image depicts a chef preparing food in a kitchen setting. The scene is likely a restaurant kitchen, and the mood is one of professionalism and focus.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 71104,
    "campaignName": "Belong Anywhere",
    "creativegraphic": "https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "red",
    "Heading_Text": "Belong Anywhere",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the World's Rich Heritage",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Discover the beauty and culture of India. Our hospitality invites you to explore ancient wonders and immerse yourself in local traditions.Let us be your guide to unforgettable experiences. ",
    "Analysis": [
      {
        "Content_Description": "The image shows a large, ornate building with a central dome and multiple arches. The building is made of red sandstone and has white trim. The building is surrounded by a large, paved courtyard. The sky is blue with wispy clouds. The image is taken from a low angle, looking up at the building.",
        "Dominant_Colors": ["red", "white", "blue"],
        "Contextual_Analysis": "The image is likely taken at a historical site in India. The architecture and the setting suggest a religious or cultural site. The mood of the image is peaceful and serene.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 32744,
    "campaignName": "Belong Anywhere",
    "creativegraphic": "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Belong Anywhere",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "orange",
    "Sub_Heading_Text": "Find Your Escape",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape the ordinary and discover a world of relaxation and rejuvenation. Our luxurious resorts offer breathtaking ocean views, pristine pools, and unparalleled service. Unwind in our comfortable lounge chairs, soak up the sun, and let your worries melt away.Belong anywhere, anytime. ",
    "Analysis": [
      {
        "Content_Description": "The image shows a row of white lounge chairs lined up next to a swimming pool. The chairs are made of wood and have white cushions. There are orange towels rolled up on some of the chairs. There are palm trees in the background and the ocean is visible in the distance. The sun is setting and the sky is a light blue color.",
        "Dominant_Colors": ["blue", "white", "brown", "orange"],
        "Contextual_Analysis": "The image depicts a relaxing scene at a resort or hotel, likely at sunset. The setting is outdoors, by the pool, and the mood is peaceful and tranquil.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 17094,
    "campaignName": "Belong Anywhere",
    "creativegraphic": "https://images.pexels.com/photos/6394556/pexels-photo-6394556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Belong",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Your Next Adventure Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Unpack your dreams and discover the world with our exceptional hospitality. From cozy retreats to vibrant city escapes, we offer the perfect destination for your unique travel style.",
    "Analysis": [
      {
        "Content_Description": "A white suitcase with brown accents is standing in front of a closed wooden door. The door is to the left of the image, and the suitcase is to the right. The suitcase is on a wooden floor, and there is a blue baseboard along the wall.",
        "Dominant_Colors": ["white", "brown", "gray"],
        "Contextual_Analysis": "The image depicts a room with a door and a suitcase. It appears to be a hallway or a hotel room.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 26494,
    "campaignName": "Travel with Purpose",
    "creativegraphic": "https://images.pexels.com/photos/6394569/pexels-photo-6394569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "green",
    "Heading_Text": "Escape to Tranquility",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Discover Your Perfect Getaway",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Immerse yourself in a world of lush greenery and serene vibes. Our tropical-themed retreat offers a sanctuary for relaxation and rejuvenation. Explore our spacious accommodations, designed with a focus on comfort and tranquility. Book your escape today and experience the ultimate travel with purpose.",
    "Analysis": [
      {
        "Content_Description": "The image shows a hallway with a large, white wall covered in a tropical-themed mural. The mural features large green leaves, painted with a realistic style. To the right of the mural, there is a doorway leading to another room. The hallway has a light-colored tiled floor. There are two small decorative bowls on the floor in front of the mural.",
        "Dominant_Colors": ["green", "white", "brown", "gray"],
        "Contextual_Analysis": "The image is likely taken inside a home or apartment. The hallway is decorated with a tropical theme, suggesting a relaxed and welcoming atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 68834,
    "campaignName": "Travel with Purpose",
    "creativegraphic": "https://images.pexels.com/photos/24734803/pexels-photo-24734803/free-photo-of-medieval-castle-in-france-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Travel with Purpose",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Discover Meaningful Experiences",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Embrace the beauty of exploration, where heritage meets tranquility. Immerse yourself in stories etched in stone, as you explore ancient castles and charming towns. Every journey is a chapter in your own story, creating memories that resonate with purpose. Travel with intention, and experience the world in a new light.",
    "Analysis": [
      {
        "Content_Description": "A large stone castle sits on a hilltop, with a town nestled at its base. The castle has tall towers and a pointed roof, and is surrounded by a wall. The town is made up of small, stone houses with red tile roofs. The sky is a soft blue with a few clouds. The scene is peaceful and serene.",
        "Dominant_Colors": ["blue", "gray", "brown", "green"],
        "Contextual_Analysis": "Setting, outdoors, Time of Day, evening, Mood, peaceful",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 26924,
    "campaignName": "Travel with Purpose",
    "creativegraphic": "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Travel with Purpose: ",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Experience Hospitality with a Soul",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape the ordinary and embark on a journey where every detail is thoughtfully curated to inspire and uplift you. ",
    "Analysis": [
      {
        "Content_Description": "The image shows a modern hotel room with a large bed, a television, and a wooden cabinet with a tray of teacups and tea bags. The room is decorated in a light and airy style with beige and brown tones. The bed is made with a plush white headboard and a light gray duvet. The bed sits on a wooden floor, and the walls are painted white. The television is mounted on the wall, and the curtains are drawn back to reveal a window with a view of the city. The cabinet is made of wood with a glass top and two shelves. A tray of teacups and tea bags is placed on the top shelf.",
        "Dominant_Colors": ["beige", "brown", "white"],
        "Contextual_Analysis": "The image depicts a contemporary hotel room, designed for relaxation and comfort. The natural light flooding in through the window, the minimalist decor, and the presence of a tea tray create a peaceful ambiance. The setting suggests a modern hotel room, possibly in an urban area.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 97514,
    "campaignName": "Travel with Purpose",
    "creativegraphic": "https://images.pexels.com/photos/24596034/pexels-photo-24596034/free-photo-of-fountain-next-to-hagia-sophia-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Discover the Soul of Travel",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Experience the Beauty and Serenity of Islamic Culture",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Embark on a journey of cultural immersion and spiritual discovery. Our curated experiences allow you to explore the breathtaking architecture, rich history, and vibrant traditions of Islamic cultures. From the iconic mosques of Istanbul to the serene desert landscapes of Morocco, we offer unforgettable travel opportunities for those seeking authentic and meaningful experiences. Let us help you create a travel itinerary that resonates with your soul and leaves a lasting impression.",
    "Analysis": [
      {
        "Content_Description": "The image shows a large mosque with a fountain in front of it. The mosque has a large dome and minarets. There are people walking around the fountain and the mosque. The sky is blue and there are some trees in the background.",
        "Dominant_Colors": ["blue", "gray", "white", "brown"],
        "Contextual_Analysis": "The image depicts a scene of a mosque and its surrounding area. The setting is outdoors, likely in a city or town, during a sunny day. The image conveys a sense of peace and tranquility. ",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 89324,
    "campaignName": "True Hospitality for every journey",
    "creativegraphic": "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "orange",
    "Heading_Text": "Discover True Hospitality",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Where Every Journey Begins",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape to a coastal haven where breathtaking views meet genuine hospitality. Immerse yourself in the vibrant charm of a town built on the cliffs, illuminated by the warm glow of sunset. Experience the tranquility of the ocean, the allure of charming streets, and the warmth of a community that welcomes you with open arms. Your journey starts here.",
    "Analysis": [
      {
        "Content_Description": "The image shows a coastal town built on the side of a cliff. The town is filled with colorful buildings and is lit up at night. There are many boats in the water below the town. The image is taken from a high vantage point, looking down at the town.",
        "Dominant_Colors": ["blue", "orange", "yellow", "green", "brown"],
        "Contextual_Analysis": "The image depicts a picturesque coastal town at sunset. The warm colors of the sky and the lights of the town create a romantic and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 85714,
    "campaignName": "True Hospitality for every journey",
    "creativegraphic": "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Experience True Hospitality",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "light blue",
    "Sub_Heading_Text": "Where comfort meets every journey.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Step into a sanctuary of serenity. ",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a large bed, two bedside tables, and a large window. The bed is made with white sheets and a light blue blanket. There are two lamps on the bedside tables. The room is painted white and has a large window with white curtains. The floor is made of wood.",
        "Dominant_Colors": ["white", "light blue", "gray", "beige"],
        "Contextual_Analysis": "The image depicts a modern bedroom with a minimalist design. The room is well-lit and appears to be in a luxury apartment. The white walls and light-colored furniture create a calming and relaxing atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 80084,
    "campaignName": "True Hospitality for every journey",
    "creativegraphic": "https://images.pexels.com/photos/6782568/pexels-photo-6782568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Experience True Hospitality",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Your Journey Starts Here",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Escape to a world of comfort and serenity. Our meticulously designed rooms offer a haven of tranquility, where every detail is thoughtfully curated to enhance your stay. Immerse yourself in the warmth of our hospitality, where every journey begins with a sense of belonging.",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a bed, a bedside table, and a bouquet of flowers on top of it. The bed is made with a light blue blanket and pillows. Two lights hang from the ceiling. The walls are white and there is a wooden floor.",
        "Dominant_Colors": ["white", "gray", "brown", "pink"],
        "Contextual_Analysis": "The image is taken in a bedroom. The room is well-lit and decorated with modern furniture. The image conveys a sense of peace and tranquility.",
        "Text_Recognition": ["CHANEL"]
      }
    ]
  },
  {
    "creativeID": 30494,
    "campaignName": "True Hospitality for every journey",
    "creativegraphic": "https://images.pexels.com/photos/1307929/pexels-photo-1307929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "True Hospitality",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "For Every Journey",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the thrill of a lifetime with our exceptional hospitality. From breathtaking views to unforgettable moments, we're dedicated to making your journey truly special. Let us elevate your travel experience and create memories that last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "The image shows a ferris wheel against a blue sky with white clouds. The ferris wheel is made of metal and has many colorful gondolas.",
        "Dominant_Colors": ["blue", "white"],
        "Contextual_Analysis": "The image conveys a sense of fun and excitement, likely taken at a carnival or amusement park.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 92984,
    "campaignName": "True Hospitality for every journey",
    "creativegraphic": "https://images.pexels.com/photos/17001738/pexels-photo-17001738/free-photo-of-decorated-tables-for-wedding-in-luxury-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "True Hospitality",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Art of Welcoming",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Step into an elegant haven where warm hospitality meets exquisite dining. Our meticulously crafted settings, bathed in soft lighting and adorned with delicate florals, create an atmosphere that invites you to savor every moment. Whether you're celebrating a milestone or enjoying a business gathering, our dedicated team is committed to exceeding your expectations. Let us curate an unforgettable experience, tailored to your every need. ",
    "Analysis": [
      {
        "Content_Description": "A large, well-lit dining room with a brick wall and wooden floors. There are multiple round tables set with white tablecloths and chairs. Each table is decorated with a centerpiece of flowers. The room is brightly lit and appears to be a restaurant or banquet hall.",
        "Dominant_Colors": ["brown", "white"],
        "Contextual_Analysis": "The image depicts a formal dining setting, likely for a special occasion such as a wedding reception or a corporate dinner. The warm lighting and elegant decor create a sophisticated and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 45594,
    "campaignName": "Stay with US, Save More",
    "creativegraphic": "https://images.pexels.com/photos/12607567/pexels-photo-12607567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Stay with Us",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience Tranquility and Value at Our Historic Landmark",
    "Body_Size": "body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in the timeless charm of our white-washed buildings, punctuated by the serene blue dome. Discover a haven of peace and affordability, perfect for your next getaway. Enjoy breathtaking views, explore the city's vibrant culture, and savor the moment. Book your stay today and unlock exclusive savings.",
    "Analysis": [
      {
        "Content_Description": "A white building with a blue dome and a cross on top. The building is surrounded by other white buildings, and there is a blue sky in the background.",
        "Dominant_Colors": ["white", "blue"],
        "Contextual_Analysis": "setting, outdoors, time of day, day, mood, peaceful",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 48304,
    "campaignName": "Stay with US, Save More",
    "creativegraphic": "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Unwind in Luxury, Indulge in Savings",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Experience the ultimate escape at our stunning beachfront resort. Immerse yourself in breathtaking ocean views, indulge in luxurious amenities, and enjoy exclusive savings on your dream getaway. Dive into our crystal-clear pool, relax on pristine white sand beaches, and savor delectable cuisine. Book your stay today and create unforgettable memories with our Stay with US, Save More campaign.",
    "Analysis": [
      {
        "Content_Description": "The image shows a luxurious resort with a large pool overlooking the ocean. The pool is surrounded by a white sandy beach and a wooden deck with lounge chairs. There is a pergola with lounge chairs in the foreground, and a modern building with large windows in the background. A man is standing on the deck of the building, looking out at the ocean.",
        "Dominant_Colors": ["blue", "white", "brown"],
        "Contextual_Analysis": "The image conveys a sense of luxury and relaxation, with the beautiful scenery and the comfortable amenities. The setting is likely a tropical island, with the clear blue water and the lush vegetation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 46804,
    "campaignName": "Stay with US, Save More",
    "creativegraphic": "https://images.pexels.com/photos/1413968/pexels-photo-1413968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "gray",
    "Heading_Text": "Step Back in Time",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Experience History",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Immerse yourself in the grandeur of ancient history with our exclusive Stay with US, Save More campaign.",
    "Analysis": [
      {
        "Content_Description": "The image shows the ruins of an ancient Roman temple. The temple is made of stone and has a series of columns that are arranged in a rectangular shape. The columns are tall and slender, and they are topped with capitals that are decorated with carvings. The temple is surrounded by a wall, and there is a cobblestone path leading up to it. The sky is a pale blue, and there are some trees in the background.",
        "Dominant_Colors": ["gray", "brown"],
        "Contextual_Analysis": "The image conveys a sense of history and grandeur. The ruins of the temple are a testament to the power and beauty of the Roman Empire. The cobblestone path suggests that the temple was once a place of pilgrimage or worship. The trees in the background suggest that the temple is located in a rural setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 78634,
    "campaignName": "Stay with US, Save More",
    "creativegraphic": "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Green",
    "Heading_Text": "Escape to Serenity",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "White",
    "Sub_Heading_Text": "Experience Tranquility at Its Finest",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "Gray",
    "Body_Text": "Immerse yourself in the rejuvenating embrace of nature. Our stunning waterfall retreats offer an unparalleled escape from the hustle and bustle, inviting you to reconnect with your inner peace. Indulge in the soothing sounds of cascading water, surrounded by lush greenery and a tranquil atmosphere. Book your stay today and unlock exclusive savings on our limited-time offers.",
    "Analysis": [
      {
        "Content_Description": "A waterfall cascading down a rocky cliff face, surrounded by lush green foliage and mist. The waterfall is the central focus of the image, with the mist creating a soft, ethereal atmosphere.",
        "Dominant_Colors": ["Green", "White", "Gray"],
        "Contextual_Analysis": "The image depicts a serene and tranquil natural setting, likely in a tropical or subtropical rainforest. The mist and the lush greenery suggest a humid environment, and the waterfall adds to the sense of peace and tranquility.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 70334,
    "campaignName": "Stay with US, Save More",
    "creativegraphic": "https://images.pexels.com/photos/6475035/pexels-photo-6475035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "gray",
    "Heading_Text": "Stay with US",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Indulge in Luxury, Without Breaking the Bank",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Experience the epitome of comfort and relaxation at our luxurious hotel.Escape the ordinary and enjoy exquisite amenities and impeccable service.With our exclusive offers, you can save more while enjoying the best that our hotel has to offer. Book your stay today and discover the perfect blend of luxury and affordability.",
    "Analysis": [
      {
        "Content_Description": "A man in a suit is sitting on a couch in a luxurious living room. He is looking at his phone. There is a table in front of him with a decanter and a glass.",
        "Dominant_Colors": ["gray", "brown", "beige"],
        "Contextual_Analysis": "The image depicts a man relaxing in a luxurious living room. The setting is indoors, and the time of day is likely evening. The mood is calm and relaxed.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 46534,
    "campaignName": "Stay with US, Save More",
    "creativegraphic": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Escape to Luxury. Save Big.",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Unwind at Our Luxurious Resort",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a breathtaking escape at our world-class resort. With stunning views, impeccable service, and a host of amenities, your stay will be an unforgettable experience.Enjoy exclusive savings on your next vacation. Book your stay today and discover the ultimate luxury retreat.",
    "Analysis": [
      {
        "Content_Description": "A large, luxurious resort with a swimming pool in the foreground. The resort is lit up at night, and there are palm trees surrounding the pool. The sky is a dark blue with some clouds.",
        "Dominant_Colors": ["blue", "black", "white", "brown"],
        "Contextual_Analysis": "The image depicts a luxurious resort at night. The setting is outdoors, and the mood is peaceful and relaxing. The time of day is likely evening or night.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 34504,
    "campaignName": "Mobile App Exclusive Deals: Book on the Go",
    "creativegraphic": "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Unlock Exclusive Deals",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Experience Seamless Travel",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover exclusive deals and offers available only through our mobile app. Skip the line, save time, and book your dream vacation with just a few taps. Download our app today and unlock a world of travel possibilities.",
    "Analysis": [
      {
        "Content_Description": "A long hallway with doors on either side. The hallway is lit by overhead lights and the floor is tiled. The walls are a light yellow color and the doors are a dark brown wood.",
        "Dominant_Colors": ["brown", "yellow", "white"],
        "Contextual_Analysis": "The image depicts a hallway in a hotel or other building. The setting is indoors and the time of day is likely daytime. The mood conveyed is one of quiet and solitude.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 58954,
    "campaignName": "Mobile App Exclusive Deals: Book on the Go",
    "creativegraphic": "https://images.pexels.com/photos/3554424/pexels-photo-3554424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Brown",
    "Heading_Text": "Unwind in Luxury",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Gray",
    "Sub_Heading_Text": "Mobile App Exclusive Deals",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "Beige",
    "Body_Text": "Indulge in unparalleled comfort and breathtaking views with our exclusive mobile app deals.",
    "Analysis": [
      {
        "Content_Description": "A brown dog is lying on a large, white bed with a gray blanket on top of it. The bed is in a spacious living room with large windows that look out onto a desert landscape. The living room has a large, gray sofa and a fireplace in the background.",
        "Dominant_Colors": ["white", "gray", "brown", "beige"],
        "Contextual_Analysis": "The image is of a living room in a modern, minimalist home. The setting is indoors and the time of day is likely daytime. The mood conveyed is one of relaxation and comfort.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 44694,
    "campaignName": "Mobile App Exclusive Deals: Book on the Go",
    "creativegraphic": "https://images.pexels.com/photos/2842886/pexels-photo-2842886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "pink",
    "Heading_Text": "Exclusive Deals",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Book Your Next Getaway with Our Mobile App",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Experience the ultimate convenience and unlock exclusive savings with our mobile app.",
    "Analysis": [
      {
        "Content_Description": "A person is stirring a pink drink in a glass with a wooden stick. The person is wearing a white shirt and a green apron. The drink is in a clear glass with a wide bowl and a long stem.",
        "Dominant_Colors": ["white", "pink", "green", "brown"],
        "Contextual_Analysis": "The image depicts a bartender preparing a drink in a bar setting. The mood is relaxed and casual.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 80334,
    "campaignName": "Mobile App Exclusive Deals: Book on the Go",
    "creativegraphic": "https://images.pexels.com/photos/6782439/pexels-photo-6782439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Exclusive Deals",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "grey",
    "Sub_Heading_Text": "Book Your Dream Getaway",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Unlock exclusive deals and book your next adventure directly through our mobile app.",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a bed, a nightstand, a chair, and a window with a view of a city. The walls are white and the floor is wood. There are two lamps on the walls and a chandelier hanging from the ceiling.",
        "Dominant_Colors": ["white", "grey", "brown"],
        "Contextual_Analysis": "The bedroom is modern and minimalist, with a focus on clean lines and neutral colors. The window provides a view of the city outside, suggesting that the room is located in an urban area. The overall mood of the image is calm and relaxing.",
        "Text_Recognition": [
          "The text on the black frame on the wall is more hustle."
        ]
      }
    ]
  },
  {
    "creativeID": 43964,
    "campaignName": "Mobile App Exclusive Deals: Book on the Go",
    "creativegraphic": "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Mobile App Exclusive Deals",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Book on the Go and Enjoy Delicious Savings",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Download our mobile app today and unlock exclusive deals on your favorite meals. ",
    "Analysis": [
      {
        "Content_Description": "A flat lay image of a meal with sweet potato fries, chili, sour cream, guacamole, and other toppings. The food is arranged on a white surface with a grey napkin and a wooden cutting board.",
        "Dominant_Colors": ["white", "brown", "green", "red"],
        "Contextual_Analysis": "The image depicts a healthy and delicious meal, likely for lunch or dinner. The flat lay style and vibrant colors suggest a focus on food photography.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 92594,
    "campaignName": "Limited Availability: Don't Miss Out!",
    "creativegraphic": "https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Limited Availability",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Escape to Paradise",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in the ultimate tropical getaway. Our overwater bungalows offer unparalleled luxury and breathtaking views.Experience the serenity of the turquoise waters, soak up the golden sunsets, and create memories that will last a lifetime.But hurry, limited availability remains. Book your dream vacation today!",
    "Analysis": [
      {
        "Content_Description": "An aerial view of a tropical resort with several overwater bungalows. The bungalows are built on stilts over crystal clear blue water. There are wooden walkways connecting the bungalows. The sun is setting in the background, casting a warm glow over the scene. There are palm trees and lush vegetation visible in the distance.",
        "Dominant_Colors": ["blue", "brown", "white"],
        "Contextual_Analysis": "The image depicts a tropical paradise, likely a resort in the Maldives or a similar destination. The setting is serene and luxurious, with the golden hour light adding to the idyllic atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 36874,
    "campaignName": "Limited Availability: Don't Miss Out!",
    "creativegraphic": "https://images.pexels.com/photos/1267306/pexels-photo-1267306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Limited Availability:",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Indulge in Craft Beer Perfection",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Experience the rich flavors and aromas of our handcrafted brews at [Bar Name]. With a limited selection of our most popular beers, this is your chance to savor the best of the best. Our cozy atmosphere, perfect for a relaxing staycation, awaits you. Visit us today and discover your new favorite brew!",
    "Analysis": [
      {
        "Content_Description": "A glass of dark beer sits on a bar counter in front of a wall of beer taps. The bar is dimly lit, and the beer has a reddish-brown hue. There are several signs behind the bar, which seem to be listing different types of beer.",
        "Dominant_Colors": ["brown", "black", "white", "gray"],
        "Contextual_Analysis": "The image conveys a cozy, dimly lit bar setting. The presence of beer taps suggests a craft brewery or pub, and the focus on the glass of beer hints at a relaxed atmosphere.",
        "Text_Recognition": ["LOVE", "STAYCATION", "Ybor Brewing", "MAIN BEER", "BIG IPA", "RADLER", "TASTYWOOD", "NORTH MILLS 70%"]
      }
    ]
  },
  {
    "creativeID": 90794,
    "campaignName": "Limited Availability: Don't Miss Out!",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Brown",
    "Heading_Text": "Limited Availability",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Beige",
    "Sub_Heading_Text": "Luxurious Accommodations",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "Black",
    "Body_Text": "Indulge in unparalleled comfort and style at our exquisite hotel. Experience a haven of tranquility and sophistication, where every detail is meticulously curated for your ultimate relaxation. Book now before it's too late and secure your escape to paradise. Limited rooms available, Don't miss out!",
    "Analysis": [
      {
        "Content_Description": "The image shows a modern bedroom with a large bed, a dresser, a nightstand, a chair, and a floor lamp. The bed is made with white linens and has a green throw pillow. The dresser is made of wood and has a mirror above it. The nightstand is made of wood and has a lamp on it. The chair is made of leather and has a wooden frame. The floor lamp is made of metal and has a black shade. The walls are a light beige color and the floor is a dark brown wood.",
        "Dominant_Colors": ["beige", "brown", "white", "black", "green"],
        "Contextual_Analysis": "The image shows a modern and stylish bedroom, likely in a hotel or a high-end home. The furniture is sleek and minimalist, and the lighting is soft and inviting. The overall mood is one of luxury and relaxation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 79854,
    "campaignName": "Limited Availability: Don't Miss Out!",
    "creativegraphic": "https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Brown",
    "Heading_Text": "Limited Availability",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Black",
    "Sub_Heading_Text": "Don't Miss Out!",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "White",
    "Body_Text": "Indulge in the ultimate bar experience, crafted with care and curated for your enjoyment.Limited seating available, so book your spot now before it's too late!",
    "Analysis": [
      {
        "Content_Description": "The image shows a bar with a wooden countertop and a back bar with shelves stocked with bottles of liquor. There are three bar stools in front of the counter. The bar is dimly lit, with warm, incandescent light coming from the overhead light fixtures. The overall mood is relaxed and inviting.",
        "Dominant_Colors": ["brown", "black", "white", "green", "red"],
        "Contextual_Analysis": "The image depicts a bar in a dimly lit setting. The warm lighting and the wooden furniture create a cozy and inviting atmosphere, suggesting a place for people to relax and socialize.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 54554,
    "campaignName": "Limited Availability: Don't Miss Out!",
    "creativegraphic": "https://images.unsplash.com/photo-1572177215152-32f247303126?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "black",
    "Heading_Text": "Limited Availability: Don't Miss Out!",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "grey",
    "Sub_Heading_Text": "Book Your Stay Before it's Too Late",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the ultimate in comfort and style at our luxurious hotel. Our modern rooms offer a tranquil retreat with plush bedding, sleek furnishings, and captivating views. Don't miss out on this limited-time opportunity to escape the ordinary and indulge in a truly unforgettable stay. Book now and secure your dream getaway!",
    "Analysis": [
      {
        "Content_Description": "A hotel room with a bed in the background and a white chair in the foreground. The bed has a dark grey blanket and white pillows. The chair is positioned to the right of the bed and is facing the camera. The room is decorated with black and white framed photos and a round mirror.",
        "Dominant_Colors": ["white", "grey", "black"],
        "Contextual_Analysis": "The image captures a cozy and modern hotel room. The soft lighting and neutral colors create a calming and inviting atmosphere. The presence of a bed and a chair suggests a space for relaxation and rest.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 93424,
    "campaignName": "Limited Availability: Don't Miss Out!",
    "creativegraphic": "https://images.pexels.com/photos/2179666/pexels-photo-2179666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "orange",
    "Heading_Text": "Limited Availability",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Discover Ancient Wonders",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the mystique of a bygone era with a limited-time offer.Embark on a journey to explore ancient structures, steeped in history and culture.This exclusive opportunity won't last long, so book your adventure today!",
    "Analysis": [
      {
        "Content_Description": "The image shows a large, ancient structure carved into a sandstone cliff. The structure appears to be a tomb, with several openings and intricate carvings. The sun is shining brightly behind the structure, creating a halo effect around it. The sky is a light blue with white clouds.",
        "Dominant_Colors": ["brown", "orange", "white", "blue"],
        "Contextual_Analysis": "The image is likely taken in a desert or arid region, possibly in the Middle East. The structure suggests a historical and cultural significance. The bright sun and clear sky indicate a sunny day.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 23904,
    "campaignName": "Guest Spotlight: Sharing your stories",
    "creativegraphic": "https://images.pexels.com/photos/19328227/pexels-photo-19328227/free-photo-of-illuminated-wave-swinger-carousel-on-a-christmas-market.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "orange",
    "Heading_Text": "Guest Spotlight",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Magic",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "At Wellenflug, we believe in creating unforgettable experiences.Our guests are at the heart of everything we do, and we love sharing their stories.Join us as we spotlight the joy, laughter, and memories made at our unique destination.",
    "Analysis": [
      {
        "Content_Description": "A carousel with orange and white lights is illuminated at night. People are standing in front of the carousel, some are looking at the camera. The carousel is decorated with intricate details and appears to be in motion.",
        "Dominant_Colors": ["orange", "black", "white"],
        "Contextual_Analysis": "The image captures a festive atmosphere at a nighttime event. The carousel suggests a fun and exciting ambiance, while the presence of people indicates a gathering or celebration.",
        "Text_Recognition": ["Wellenflug"]
      }
    ]
  },
  {
    "creativeID": 30794,
    "campaignName": "Guest Spotlight: Sharing your stories",
    "creativegraphic": "https://images.unsplash.com/photo-1549416878-30862a3e49e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Guest Spotlight",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Sharing Your Stories",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Welcome to our table, where we celebrate the stories of our guests.We're excited to hear your experiences at our hotel, from the cozy comfort of our dining room to the unique moments you've cherished. Share your memories, and let us showcase the true essence of hospitality.",
    "Analysis": [
      {
        "Content_Description": "The image shows a dining room with a round table and four chairs. The table is made of wood and has a white tablecloth. There are two chairs on each side of the table, and they are all made of wood. There is a vase of flowers in the center of the table. The room is decorated with a painting on the wall, and a chest of drawers is on the left side of the room. The room is lit by a ceiling fan.",
        "Dominant_Colors": ["brown", "white", "green"],
        "Contextual_Analysis": "The image depicts a dining room in a home, and it appears to be a cozy and inviting space. The setting is indoors, and the time of day is likely daytime.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 79274,
    "campaignName": "Guest Spotlight: Sharing your stories",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1681495135418-9ebdca346523?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Guest Spotlight: Sharing Your Stories",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Capture the Moments, Share the Memories",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "From sun-kissed beaches to breathtaking sunsets, we want to hear about your unforgettable experiences at our resort. Share your photos and stories using #GuestSpotlight and let your journey inspire others. We'll be featuring our favorite submissions on our social media channels.",
    "Analysis": [
      {
        "Content_Description": "Two women are sitting on a rock near the ocean, taking a selfie with a phone. The woman in the front is wearing a white swimsuit with black stripes and the woman in the back is wearing a white shirt and sunglasses.",
        "Dominant_Colors": ["blue", "white", "brown", "tan"],
        "Contextual_Analysis": "The image shows two women enjoying a day at the beach, possibly on vacation. The setting is outdoors, with a view of the ocean and rocks. The mood is light and carefree, as the women are smiling and taking a selfie.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 74824,
    "campaignName": "Guest Spotlight: Sharing your stories",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "black",
    "Heading_Text": "Guest Spotlight: Sharing Your Stories",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Experience Unparalleled Luxury at Our Hotel",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Indulge in the epitome of comfort and sophistication at our hotel.",
    "Analysis": [
      {
        "Content_Description": "The image shows a luxurious bedroom with a round bed, a fireplace, and a large window. The bed is covered in white linens and has several pillows. There is a  tray with a glass of water and a decanter on the bedside table. The fireplace is on the left side of the room and has a black surround. The window is on the right side of the room and has a view of a city skyline. The room is decorated in a modern style with beige and white walls and a patterned rug.",
        "Dominant_Colors": ["white", "beige", "brown", "black", "gold"],
        "Contextual_Analysis": "The image depicts a luxurious bedroom in a modern home. The setting is indoors and the time of day is likely evening, as the lighting is dim and the fireplace is lit. The mood conveyed is one of relaxation and luxury.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 99174,
    "campaignName": "Guest Spotlight: Sharing your stories",
    "creativegraphic": "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Guest Spotlight: Sharing Your Stories",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Experience the Ultimate Relaxation at Our Tropical Paradise",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Escape to a world of tranquility and luxury. Our stunning villas offer private pools, lush gardens, and breathtaking views. Share your unforgettable experiences with us and let us showcase your story.Book your stay today and create memories that will last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "The image shows a modern house with a swimming pool in the backyard. The house is white with large windows and a wooden pergola. The pool is blue and surrounded by a wooden deck. There are some plants and a lounge chair set on the deck.",
        "Dominant_Colors": ["white", "blue", "brown", "green"],
        "Contextual_Analysis": "The image is likely taken in a tropical or subtropical climate, as evidenced by the pool and the lush vegetation. The mood of the image is one of relaxation and luxury.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 28114,
    "campaignName": "Transform your Experiences",
    "creativegraphic": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Transform Your Experiences",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Rediscover Serenity in a Modern Oasis",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Escape the ordinary and immerse yourself in the tranquility of our luxurious desert retreat. Our spacious bedrooms offer breathtaking views, cozy fireplaces, and modern amenities designed to elevate your stay.Experience the ultimate escape where comfort and serenity blend seamlessly.",
    "Analysis": [
      {
        "Content_Description": "A large, modern bedroom with a king-size bed, a large window with a view of a desert landscape, a fireplace, a couch, and a rug on the floor.",
        "Dominant_Colors": ["white", "brown", "gray", "beige"],
        "Contextual_Analysis": "The setting is a modern bedroom in a desert home. The time of day is daytime, and the mood conveyed is peaceful and serene.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 28234,
    "campaignName": "Transform your Experiences",
    "creativegraphic": "https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Transform Your Experiences",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Discover Unforgettable Moments",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Immerse yourself in the awe-inspiring beauty of iconic landmarks, where history and spirituality intertwine. From breathtaking mountain vistas to the serenity of ancient structures, our curated experiences will transform your journey into a truly unforgettable adventure.Embrace the grandeur of the world, connect with its rich tapestry of culture and heritage, and create memories that will last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "A large statue of Jesus Christ with outstretched arms stands atop a mountain, overlooking a sprawling city and the ocean. The statue is made of stone and is weathered, giving it a sense of age and grandeur. A large crowd of people gather at the base of the statue, likely tourists and locals alike, all looking up in awe at the iconic landmark. The scene is bathed in soft, golden light, creating a sense of peace and tranquility.",
        "Dominant_Colors": ["blue", "gray", "brown", "green"],
        "Contextual_Analysis": "The image captures a serene moment at a famous tourist destination, showcasing the breathtaking view from atop a mountain and the awe-inspiring presence of a religious symbol. The setting is likely outdoors, during a sunny day, with a sense of calm and reverence permeating the scene.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 87344,
    "campaignName": "Transform your Experiences",
    "creativegraphic": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Transform Your",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Escape to Paradise.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a world of luxury and relaxation at our tropical resort. Immerse yourself in the tranquility of our stunning pool, surrounded by lush greenery and vibrant blue skies. Our resort offers the perfect escape from the everyday, where you can unwind and recharge in style.",
    "Analysis": [
      {
        "Content_Description": "A swimming pool in the middle of a resort with buildings on either side. The pool is surrounded by palm trees and other tropical plants. The sky is blue with white clouds.",
        "Dominant_Colors": ["blue", "white", "green", "brown"],
        "Contextual_Analysis": "The image depicts a tropical resort. The setting is outdoors, and the time of day is likely midday. The mood conveyed is relaxing and peaceful.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 42374,
    "campaignName": "Transform your Experiences",
    "creativegraphic": "https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Transform Your Experiences",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Unwind and Reconnect with the World",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape the ordinary and discover a world of tranquility. Our luxurious accommodations offer breathtaking ocean views and cozy interiors designed for ultimate relaxation. Immerse yourself in the serenity of nature, rejuvenate your senses, and create unforgettable memories. Embark on a journey of transformation, where every moment is a chance to reconnect with yourself and the world around you.",
    "Analysis": [
      {
        "Content_Description": "The image shows a living room with a large window overlooking a wooden deck and the ocean. There is a brown leather couch with a black throw pillow and a white and black striped blanket on it. A coffee table with books and a candle sits in front of the couch. Two black chairs sit on the deck overlooking the ocean. ",
        "Dominant_Colors": ["brown", "blue", "white"],
        "Contextual_Analysis": "The image conveys a sense of relaxation and peacefulness, with the beautiful ocean view and the comfortable furnishings. The natural light suggests it is daytime.",
        "Text_Recognition": ["ULTIMATE TRAVEL LIST"]
      }
    ]
  },
  {
    "creativeID": 77304,
    "campaignName": "Local Collaborations: Partnering with the Community",
    "creativegraphic": "https://images.unsplash.com/photo-1718927118103-f2a1c12349d9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Discover Local Charm",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Partnering with the Community",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in the heart of our community. Our Local Collaborations program connects you with the best local businesses, artisans, and experiences. From fresh seafood to handcrafted souvenirs, explore the unique flavors and traditions of our region.Unwind on our pristine beaches, marvel at the breathtaking mountain views, and create lasting memories with our warm hospitality.",
    "Analysis": [
      {
        "Content_Description": "A beach scene with people relaxing under an umbrella. There is a mountain in the background with a statue on top of it. There are boats in the water and a building on the left side of the image. ",
        "Dominant_Colors": ["blue", "green", "white", "brown"],
        "Contextual_Analysis": "The image is a beach scene that is likely taken during the daytime. The mood of the image is relaxed and peaceful.",
        "Text_Recognition": ["BISUDE"]
      }
    ]
  },
  {
    "creativeID": 49474,
    "campaignName": "Local Collaborations: Partnering with the Community",
    "creativegraphic": "https://images.unsplash.com/photo-1718927111065-4bfab7d50a82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "yellow",
    "Heading_Text": "Local Collaborations: Partnering with the Community",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Supporting Local Businesses, One Delicious Bite at a Time",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Our commitment to fostering vibrant communities goes beyond simply offering exceptional hospitality. We believe in the power of partnership, and that's why We're actively collaborating with local businesses like Mike's Beach Stand. By supporting local vendors, We're not only showcasing the unique flavors of the area but also contributing to the economic well-being of our community. Join us in experiencing the best of local, one delicious bite (or refreshing drink) at a time.",
    "Analysis": [
      {
        "Content_Description": "A beachside stand with a yellow awning labeled Mikes is set up on a paved walkway. People are walking on the walkway, which is next to a bike path. In the background, a large mountain is visible. The stand has a variety of items for sale, including drinks and snacks. There are also several blue recycling bins in front of the stand.",
        "Dominant_Colors": ["blue", "yellow", "green", "brown"],
        "Contextual_Analysis": "The image captures a lively beach scene on a sunny day. The presence of the beach stand, the people walking, and the mountain in the background suggest a popular tourist destination. The overall mood is cheerful and relaxed.",
        "Text_Recognition": [
          "Mikes"
        ]
      }
    ]
  },
  {
    "creativeID": 48354,
    "campaignName": "Local Collaborations: Partnering with the Community",
    "creativegraphic": "https://images.unsplash.com/photo-1573548998489-193601b0b4f5?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Dive into Local Collaborations",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Partnering with the Community for an Unforgettable Experience",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Experience the vibrant spirit of our destination through our commitment to local collaborations. We partner with passionate individuals and businesses to offer unique experiences that connect you to the heart of our community. From diving excursions with local experts to indulging in delectable cuisine crafted with fresh, locally-sourced ingredients, our collaborations ensure an authentic and enriching journey. Discover the magic of our destination, one connection at a time.",
    "Analysis": [
      {
        "Content_Description": "Two people wearing scuba gear are in the water, smiling at the camera. They are in front of a white building with a beach in the background. The building is behind a row of palm trees.",
        "Dominant_Colors": ["blue", "white", "green"],
        "Contextual_Analysis": "The image is set on a tropical beach, likely during the day. The mood is happy and carefree.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 72704,
    "campaignName": "Local Collaborations: Partnering with the Community",
    "creativegraphic": "https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?q=80&w=1553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Experience the Magic of Venice",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Partnering with the Community: A Venetian Experience",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Immerse yourself in the enchanting beauty of Venice, where history meets modern luxury.",
    "Analysis": [
      {
        "Content_Description": "A view of a canal in Venice, Italy. The canal is lined with buildings on both sides. There are three gondolas in the water, one of which is in the foreground and being rowed by a gondolier. The other two gondolas are in the background and are not being rowed. The buildings are all made of brick and stone and have a variety of architectural styles. There is a blue flag flying from the top of one of the buildings. The sky is blue and the water is a light blue.",
        "Dominant_Colors": ["blue", "white", "brown", "red"],
        "Contextual_Analysis": "The image depicts a serene and picturesque scene of Venice, Italy, with gondolas gliding through the canal. The warm colors of the sunset cast a soft glow on the water and buildings, creating a romantic and tranquil atmosphere.",
        "Text_Recognition": [
          "FONDAMENTA DE LA PRISON"
        ]
      }
    ]
  },
  {
    "creativeID": 41344,
    "campaignName": "#AskMeAnything with the Chef",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1681841594224-ad729a249113?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "#AskMeAnything",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Experience",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a world of culinary delights, where passion meets perfection. Join us for an unforgettable dining experience, where our expert chef is ready to answer all your questions and tantalize your taste buds. Every dish is a masterpiece, crafted with the finest ingredients and a touch of artistry. Elevate your dining adventure with #AskMeAnything, a unique opportunity to connect with the culinary genius behind your meal.",
    "Analysis": [
      {
        "Content_Description": "A group of people are sitting around a table, toasting with wine glasses. The table is set with plates of food and candles. The people are all smiling and looking happy. The scene is warm and inviting.",
        "Dominant_Colors": ["white", "green", "red", "brown"],
        "Contextual_Analysis": "The image is set in a dining room or restaurant. The people are celebrating a special occasion, such as a birthday or anniversary. The mood is festive and joyful.",
        "Text_Recognition": ["Unsplash+"]
      }
    ]
  },
  {
    "creativeID": 78284,
    "campaignName": "#AskMeAnything with the Chef",
    "creativegraphic": "https://images.unsplash.com/photo-1545438102-799c3991ffb2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "pink",
    "Heading_Text": "#AskMeAnything with the Chef",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Unveiling the Art of Mixology",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Join us for an exclusive Q&A session with our renowned chef, where We'll delve into the secrets behind crafting our signature cocktails. From the perfect blend of flavors to the art of garnishing, get ready to elevate your cocktail knowledge. Ask anything, and We'll share our expertise!",
    "Analysis": [
      {
        "Content_Description": "Two cocktails, one pink and one clear, are sitting on a dark surface. The pink cocktail is in a tall glass with a stem and is garnished with lemon slices and a sprig of pink flowers. The clear cocktail is in a low, round glass and is garnished with a lemon twist. Both drinks are surrounded by scattered flower petals.",
        "Dominant_Colors": ["pink", "yellow", "black", "white", "red"],
        "Contextual_Analysis": "The image depicts a still life of two cocktails, suggesting a relaxed and sophisticated setting. The scattered flower petals add a touch of whimsy and romance.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 45684,
    "campaignName": "#AskMeAnything with the Chef",
    "creativegraphic": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "green",
    "Heading_Text": "#AskMeAnything",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Quench",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Join",
    "Analysis": [
      {
        "Content_Description": "A glass of sparkling water with lime and mint is being poured from a bottle. The glass is on a wooden board with more lime and mint around it.",
        "Dominant_Colors": ["green", "white", "brown"],
        "Contextual_Analysis": "The image conveys a refreshing and summery mood, likely depicting a drink being prepared.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 58834,
    "campaignName": "#AskMeAnything with the Chef",
    "creativegraphic": "https://images.unsplash.com/photo-1659037787192-ee2a4823cdde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "green",
    "Heading_Text": "Craving a #BreakfastMasterpiece? ",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Indulge in the Perfect Waffle Experience",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Join us for our #AskMeAnything series, where you can get insider tips and tricks from our talented chef on how to create the most delicious waffles.Learn the secrets to perfectly crispy edges, fluffy insides, and the best toppings.We'll be answering your questions live, so Don't be shy!#Waffles #ChefTips #Foodie",
    "Analysis": [
      {
        "Content_Description": "A man is eating a waffle with bacon and eggs. He is pouring syrup on the waffle from a small glass. There is a second plate with more waffles and bacon in the background.",
        "Dominant_Colors": ["green", "brown", "white", "yellow"],
        "Contextual_Analysis": "The image is set in a restaurant or cafe. The man is enjoying a meal. The mood is casual and relaxed.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 67374,
    "campaignName": "#AskMeAnything with the Chef",
    "creativegraphic": "https://images.unsplash.com/photo-1516788875874-c5912cae7b43?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "red",
    "Heading_Text": "#AskMeAnything",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Your questions, answered by the culinary experts.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "silver",
    "Body_Text": "Curious about the menu? Wondering about our ingredients? Join us for an exclusive #AskMeAnything session with our talented chefs. Get ready to discover the secrets behind our delicious dishes and have all your culinary questions answered. RSVP now and be a part of the conversation!",
    "Analysis": [
      {
        "Content_Description": "A waiter is carrying a tray with four drinks, two glasses of champagne, and two red cocktails with straws. The drinks are on a silver tray and the waiter is wearing a white shirt. The background is blurred and out of focus, but it appears to be a city street.",
        "Dominant_Colors": ["white", "red", "yellow", "silver"],
        "Contextual_Analysis": "The image conveys a sense of service and hospitality. The waiter is carrying the drinks to a customer, likely in a restaurant or bar setting. The blurred background suggests a bustling urban environment.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 20194,
    "campaignName": "Behind-the-Scenes Tours: Discover What Makes Us Special",
    "creativegraphic": "https://images.pexels.com/photos/3025096/pexels-photo-3025096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "purple",
    "Heading_Text": "Experience the Thrill",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "pink",
    "Sub_Heading_Text": "Discover What Makes Us Special",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in the electrifying atmosphere of our stadium, where every event is a spectacle.Join our exclusive Behind-the-Scenes Tours and witness the magic that goes into creating unforgettable experiences.From the intricate stage design to the bustling energy of our production crew, you'll gain an insider's perspective on what makes our venue truly special.",
    "Analysis": [
      {
        "Content_Description": "A large crowd of people are gathered in a stadium, cheering and waving their hands in the air. There are lights shining down on the crowd from the ceiling, and a stage can be seen in the distance. The crowd is packed tightly together, and the atmosphere is electric. ",
        "Dominant_Colors": ["pink", "purple", "yellow", "black", "white"],
        "Contextual_Analysis": "The image captures the excitement of a live concert or event. The setting is an indoor stadium, likely during the evening hours. The mood is one of excitement, anticipation, and exhilaration.",
        "Text_Recognition": ["THRILL IN MANILA"]
      }
    ]
  },
  {
    "creativeID": 62024,
    "campaignName": "Behind-the-Scenes Tours: Discover What Makes Us Special",
    "creativegraphic": "https://images.pexels.com/photos/24600795/pexels-photo-24600795/free-photo-of-ara-libertad-in-port-in-argentina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Behind-the-Scenes Tours",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Discover What Makes Us Special",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Embark on an exclusive journey behind the scenes of our iconic property.",
    "Analysis": [
      {
        "Content_Description": "A large white sailing ship is docked in a harbor. The ship has multiple masts and sails, and is decorated with flags of various colors. There are people on the deck of the ship, and a few people are standing on the shore in the foreground. The water is a light blue color, and the sky is a clear blue color.",
        "Dominant_Colors": ["blue", "white", "green"],
        "Contextual_Analysis": "The image depicts a large sailing ship docked in a harbor. The ship is likely on display or being used for a special event, given the flags and the people on board. The bright blue sky and calm water suggest a sunny day. The overall mood is festive and celebratory.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 69744,
    "campaignName": "Behind-the-Scenes Tours: Discover What Makes Us Special",
    "creativegraphic": "https://images.pexels.com/photos/4825721/pexels-photo-4825721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Behind-the-Scenes Tours: Discover What Makes Us Special",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Experience the Magic of Our Glamping Retreat",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Step inside our luxurious glamping tents and discover a world of comfort and tranquility. ",
    "Analysis": [
      {
        "Content_Description": "The image shows the interior of a tent with a view of the ocean. The tent is made of brown canvas and has a wooden floor. There is a bed with a brown blanket in the foreground, and a wooden table and chairs are visible through the open tent flap. The ocean is visible in the background.",
        "Dominant_Colors": ["brown", "blue", "white"],
        "Contextual_Analysis": "The image conveys a sense of relaxation and tranquility, with the open tent flap and the view of the ocean suggesting a peaceful and secluded setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 58974,
    "campaignName": "Behind-the-Scenes Tours: Discover What Makes Us Special",
    "creativegraphic": "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "black",
    "Heading_Text": "Behind-the-Scenes Tours",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Discover What Makes Us Special",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Embark on an exclusive journey behind the scenes of our exquisite hotel. Witness the meticulous craftsmanship and dedication that goes into creating unforgettable experiences. From the serene tranquility of our Japanese-inspired gardens to the artistry of our culinary team, discover the hidden secrets that make our hotel truly special. Join us for a glimpse into the heart of our hospitality.",
    "Analysis": [
      {
        "Content_Description": "A black and white image of a traditional Japanese torii gate standing in the middle of a calm body of water. The gate is made of wood and has a simple, elegant design. The water is smooth and still, reflecting the sky and the gate. The background is a hazy, indistinct landscape of hills and clouds. The image conveys a sense of peace, tranquility, and serenity.",
        "Dominant_Colors": ["black", "white"],
        "Contextual_Analysis": "The image is a serene and minimalist landscape, likely taken at a Japanese shrine or temple. The torii gate is a traditional symbol of transition and passage, suggesting a spiritual or sacred space. The calm water and hazy background create a sense of tranquility and contemplation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 32954,
    "campaignName": "Curated Playlists: Set the Mood for Your Stay",
    "creativegraphic": "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Discover Your Perfect Stay",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "black",
    "Sub_Heading_Text": "Escape the Ordinary",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in the perfect ambiance with our curated playlists. From vibrant cityscapes to tranquil retreats, we've crafted unique soundscapes to complement your every mood. Explore our diverse collection of music and let us set the stage for your unforgettable stay.",
    "Analysis": [
      {
        "Content_Description": "Two people are holding up US passports in front of a building with a tower in the background. The people are out of focus, but the passports are in focus. The passports are both open and the pages are visible.",
        "Dominant_Colors": ["blue", "black", "white", "yellow"],
        "Contextual_Analysis": "The image is set in an outdoor urban environment, likely a public square or plaza. The bright sunlight and clear sky suggest a sunny day. The image conveys a sense of travel and adventure.",
        "Text_Recognition": ["PASSPORT", "United States of America"]
      }
    ]
  },
  {
    "creativeID": 95484,
    "campaignName": "Curated Playlists: Set the Mood for Your Stay",
    "creativegraphic": "https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "C",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "pink",
    "Sub_Heading_Text": "E",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "O",
    "Analysis": [
      {
        "Content_Description": "A DJ is mixing music on a soundboard in a dark club. The DJ is wearing headphones and is focused on the soundboard. There are blue and pink lights in the background.",
        "Dominant_Colors": ["black", "blue", "pink"],
        "Contextual_Analysis": "The image is set in a dark club with blue and pink lights. The mood is energetic and exciting.",
        "Text_Recognition": ["Pioneer DJ"]
      }
    ]
  },
  {
    "creativeID": 69484,
    "campaignName": "Curated Playlists: Set the Mood for Your Stay",
    "creativegraphic": "https://images.pexels.com/photos/1267693/pexels-photo-1267693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Curated Playlists:",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "teal",
    "Sub_Heading_Text": "Elevate your experience with personalized soundtracks.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Imagine arriving at your destination, stepping into your room, and being greeted by the perfect soundtrack.",
    "Analysis": [
      {
        "Content_Description": "Three women are sitting on a bench outside a cafe. The woman on the left is wearing a white t-shirt and jeans. The woman in the middle is wearing a light blue button down shirt, black jeans, and sunglasses. The woman on the right is wearing a teal skirt, a black tank top, and sunglasses. They are all holding drinks and laughing.",
        "Dominant_Colors": ["blue", "teal", "white", "black"],
        "Contextual_Analysis": "The image depicts a casual, friendly setting. The women are enjoying each others company and having a good time.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 46284,
    "campaignName": "Curated Playlists: Set the Mood for Your Stay",
    "creativegraphic": "https://images.pexels.com/photos/3536274/pexels-photo-3536274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "White",
    "Heading_Text": "Curated Playlists",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Black",
    "Sub_Heading_Text": "Elevate Your Stay with the Perfect Soundtrack",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "Black",
    "Body_Text": "Immerse yourself in the vibrant energy of our curated playlists, expertly crafted to enhance every moment of your stay.",
    "Analysis": [
      {
        "Content_Description": "A black and white photo of a crowded nightclub with a DJ booth in the background. There are people dancing in the foreground, while others are seated at tables or standing around the DJ booth. The atmosphere is lively and energetic.",
        "Dominant_Colors": ["Black", "White"],
        "Contextual_Analysis": "Setting, Nightclub, Time of Day, Night, Mood, Energetic, Lively",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 41784,
    "campaignName": "Curated Playlists: Set the Mood for Your Stay",
    "creativegraphic": "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Curated Playlists: Set the Mood for Your Stay",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Elevate Your Hospitality Experience with Bespoke Soundscapes",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Immerse your guests in a world of curated sounds that enhance their stay. Our expertly crafted playlists offer a range of moods, from tranquil relaxation to vibrant energy, tailored to every occasion. ",
    "Analysis": [
      {
        "Content_Description": "A dining room with a wooden table and white chairs, set for a meal. A large window overlooks a backyard. The room has a brick wall and a chandelier hanging from the ceiling.",
        "Dominant_Colors": ["brown", "white", "green"],
        "Contextual_Analysis": "The image depicts a dining room, likely in a home, during the daytime. The scene is bright and airy, suggesting a warm and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 26704,
    "campaignName": "Welcome Back, [Guest Name]! Your Home Away from Home",
    "creativegraphic": "https://images.pexels.com/photos/24461269/pexels-photo-24461269/free-photo-of-table-and-chairs-in-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Welcome Back,",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Escape the everyday and rediscover comfort.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Step into a world of relaxation and personalized service. Our meticulously designed accommodations offer a serene escape from the ordinary, providing the perfect blend of comfort and elegance. Enjoy the tranquility of our living spaces, bathed in natural light and meticulously crafted to create a haven of peace and tranquility.",
    "Analysis": [
      {
        "Content_Description": "The image shows a living room with two windows on the right side of the frame. The windows are covered with white curtains with brown lace trim. There are two chairs and a small table in the center of the room. A large green potted plant is to the left of the table. The walls are beige and the floor is tiled. The room is well-lit and appears to be in a home or hotel.",
        "Dominant_Colors": ["beige", "brown", "white", "green"],
        "Contextual_Analysis": "The image depicts a well-furnished living room, likely in a home or hotel, with a focus on comfort and elegance. The natural light streaming in through the windows suggests a bright and airy atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 61354,
    "campaignName": "Welcome Back, [Guest Name]! Your Home Away from Home",
    "creativegraphic": "https://images.pexels.com/photos/5864290/pexels-photo-5864290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Welcome Back, [Guest Name]!",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Indulge in the Warmth of Hospitality",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "yellow",
    "Body_Text": "Escape to a haven of comfort and deliciousness. Our inviting atmosphere and delectable cuisine will make you feel right at home. Join us for a memorable dining experience, crafted with care for your enjoyment.",
    "Analysis": [
      {
        "Content_Description": "A table with a wooden barrel top, set with two plates of food, a glass of beer, and a glass of wine. The first plate contains a sandwich, fries, and a small bowl of dipping sauce. The second plate contains a sandwich, fries, and a small bowl of dipping sauce. The beer glass is filled with a light brown liquid, and the wine glass is filled with a dark red liquid.",
        "Dominant_Colors": ["brown", "white", "yellow", "red"],
        "Contextual_Analysis": "The image depicts a casual dining setting, possibly in a bar or restaurant. The mood is relaxed and inviting.",
        "Text_Recognition": ["Leffe"]
      }
    ]
  },
  {
    "creativeID": 70994,
    "campaignName": "Welcome Back, [Guest Name]! Your Home Away from Home",
    "creativegraphic": "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Blue",
    "Heading_Text": "Welcome Back,",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Green",
    "Sub_Heading_Text": "Escape to Paradise",
    "Body_Size": "P",
    "Body_Font": "Arial",
    "Body_Color": "White",
    "Body_Text": "Indulge in luxurious relaxation at our tropical oasis. Enjoy the refreshing swimming pool, unwind in our tranquil gazebo, and let our attentive staff cater to your every need.We've missed you!",
    "Analysis": [
      {
        "Content_Description": "The image shows a swimming pool surrounded by palm trees and a gazebo. The pool is a light blue color and has a curved shape. There are several people in the pool and on the surrounding patio. The gazebo is white with a brown roof and is situated in the middle of the scene. The palm trees are tall and green and provide shade for the pool area. The sky is blue with white clouds. ",
        "Dominant_Colors": ["blue", "green", "brown", "white"],
        "Contextual_Analysis": "The scene is set in a tropical resort or hotel. The image evokes a sense of relaxation and tranquility. The blue sky and water, the lush greenery, and the comfortable seating all contribute to this feeling. ",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 33424,
    "campaignName": "Welcome Back, [Guest Name]! Your Home Away from Home",
    "creativegraphic": "https://images.pexels.com/photos/4916534/pexels-photo-4916534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Welcome Back,",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Escape to Tranquility",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in the serenity of our private oasis. Relax by the shimmering pool, surrounded by lush greenery and the gentle glow of lanterns. Let the stresses melt away as you reconnect with yourself in this tranquil retreat.",
    "Analysis": [
      {
        "Content_Description": "A small, rectangular pool is surrounded by a tiled patio. The pool is filled with clear, blue water. There are plants and trees around the pool, and a few lanterns hanging from the branches. The patio is made of large, square tiles in a light brown color. There are two chairs in the background, one of which is made of wood and the other of metal.",
        "Dominant_Colors": ["brown", "green", "white"],
        "Contextual_Analysis": "The image shows a relaxing outdoor space with a pool and patio. The setting is likely a private residence or a resort. The time of day is likely evening, as the lanterns are lit.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 67434,
    "campaignName": "Welcome Back, [Guest Name]! Your Home Away from Home",
    "creativegraphic": "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "gray",
    "Heading_Text": "Welcome Back, [Guest Name]!",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience Unparalleled Comfort and Hospitality",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Step into a haven of relaxation and indulgence, where every detail is crafted to make you feel at home.",
    "Analysis": [
      {
        "Content_Description": "A modern dining room with a round table and six chairs. The table is made of dark wood and the chairs are upholstered in gray fabric. There are four pendant lights hanging over the table, and the walls are painted in a dark shade of gray. The room is decorated with wooden panels on the walls and a large window with curtains.",
        "Dominant_Colors": ["gray", "brown", "black", "white"],
        "Contextual_Analysis": "The image depicts a modern dining room with a sophisticated and stylish design. The dark colors and sleek furniture create a luxurious and inviting atmosphere. The room is well-lit by the pendant lights, and the window provides natural light.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 23244,
    "campaignName": "Double Points Weekend: Earn More, Experience More",
    "creativegraphic": "https://images.pexels.com/photos/1850592/pexels-photo-1850592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "yellow",
    "Heading_Text": "Double Points Weekend: Earn More, Experience More",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Indulge in the Good Life",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "This weekend, savor every sip and every moment. Enjoy double points on all your purchases, so you can unlock more luxurious experiences. From handcrafted cocktails to delectable bites, every indulgence is amplified. Raise a glass to the good life - it's waiting for you.",
    "Analysis": [
      {
        "Content_Description": "The image shows a dimly lit bar with a bartender serving drinks to a customer. The bar is lined with shelves of liquor bottles. There are several bar stools and a wooden table in the foreground. The walls are lined with corrugated metal and the ceiling has exposed wooden beams. The mood of the scene is relaxed and inviting.",
        "Dominant_Colors": ["brown", "black", "yellow", "red"],
        "Contextual_Analysis": "Setting, bar, Time of Day, evening, Mood, relaxed",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 97734,
    "campaignName": "Double Points Weekend: Earn More, Experience More",
    "creativegraphic": "https://images.pexels.com/photos/356614/pexels-photo-356614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Double Points Weekend: Earn More, Experience More",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gold",
    "Sub_Heading_Text": "Immerse Yourself in Cultural Splendor",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Discover the allure of ancient traditions and vibrant festivities this weekend.Enjoy double points on all your hotel stays, dining experiences, and spa treatments.Explore the rich cultural tapestry of [Location] and create unforgettable memories.Book your escape today and unlock a world of rewards.",
    "Analysis": [
      {
        "Content_Description": "The image shows a brightly lit Chinese temple at night. The temple is ornate, with red and gold accents, and features multiple tiers. The temple is decorated with lanterns, and there is a statue of a deity in front of the entrance. The scene is illuminated by streetlights and lanterns, casting a warm glow on the building and the surrounding area.",
        "Dominant_Colors": ["red", "gold", "black", "white"],
        "Contextual_Analysis": "The image captures a serene and festive atmosphere. The temple is likely decorated for a special occasion, such as a religious festival or holiday. The nighttime setting and the warm lighting create a sense of peace and tranquility.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 72964,
    "campaignName": "Double Points Weekend: Earn More, Experience More",
    "creativegraphic": "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "48",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Double Points Weekend",
    "Sub_Heading_Size": "24",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Earn More, Experience More",
    "Body_Size": "16",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Indulge in delicious meals and unforgettable moments this weekend. Earn double points on all your dining purchases and savor every bite with loved ones.",
    "Analysis": [
      {
        "Content_Description": "A group of people are sitting at a wooden table, eating and drinking. They are surrounded by empty plates, glasses, and food. The table is set with a wooden cutting board with three baguettes on it. There are also various bowls of salad, and plates of pasta. One person is pouring a beverage from a glass pitcher into a glass. The image is taken from a birds eye view.",
        "Dominant_Colors": ["brown", "white", "green"],
        "Contextual_Analysis": "The image depicts a casual gathering of friends or family enjoying a meal together. The setting is likely a dining room or kitchen, and the time of day is daytime. The mood conveyed is one of relaxed camaraderie and enjoyment.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 89774,
    "campaignName": "Double Points Weekend: Earn More, Experience More",
    "creativegraphic": "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "30",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Double Points Weekend",
    "Sub_Heading_Size": "24",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Earn More, Experience More",
    "Body_Size": "16",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "This weekend, experience the luxury of a modern kitchen without the stress of a renovation.",
    "Analysis": [
      {
        "Content_Description": "A modern kitchen with white cabinets and a large island in the center. The island has a white countertop and two bar stools. There is a stainless steel refrigerator on the left side of the image and a sink and dishwasher on the right side. The kitchen has a white tile backsplash and a large window behind the sink. The ceiling has recessed lighting.",
        "Dominant_Colors": ["white", "gray", "brown", "silver"],
        "Contextual_Analysis": "The image shows a modern, well-lit kitchen that is likely in a home. The clean lines and white surfaces create a sense of spaciousness and serenity.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 34524,
    "campaignName": "Refer a Friend: Share the Love, Earn Rewards",
    "creativegraphic": "https://images.pexels.com/photos/3811014/pexels-photo-3811014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "yellow",
    "Heading_Text": "Refer a Friend",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Give the gift of Samovar this Christmas.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "red",
    "Body_Text": "This holiday season, spread the cheer with Samovar! Refer your friends and family and earn exclusive rewards. Every referral brings you closer to unforgettable experiences. Celebrate with us!",
    "Analysis": [
      {
        "Content_Description": "A night shot of a building decorated with Christmas lights and a sign that says Samovar in Russian. ",
        "Dominant_Colors": ["yellow", "brown", "red"],
        "Contextual_Analysis": "The image is likely taken during the Christmas season, as the building is decorated with Christmas lights and there is a Christmas market in the foreground. The mood is festive and joyful.",
        "Text_Recognition": [
          "u0421u0410u041cu041eu0412u0410u0420u042b"
        ]
      }
    ]
  },
  {
    "creativeID": 15334,
    "campaignName": "Refer a Friend: Share the Love, Earn Rewards",
    "creativegraphic": "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "pink",
    "Heading_Text": "Refer a Friend",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Treat yourself and your friends to delicious delights.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Enjoy refreshing smoothies, tantalizing dishes, and luxurious accommodations at [your brand name].",
    "Analysis": [
      {
        "Content_Description": "A still life image of a pink smoothie in a glass jar with a straw sticking out of it. The smoothie is surrounded by a pineapple, sliced strawberries, bananas, oranges, and raspberries. There is a pink wall in the background.",
        "Dominant_Colors": ["pink", "green", "yellow", "white", "red"],
        "Contextual_Analysis": "The image is a still life of a healthy snack or meal, likely set up for a food blog or social media post.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 93494,
    "campaignName": "Refer a Friend: Share the Love, Earn Rewards",
    "creativegraphic": "https://images.pexels.com/photos/4954713/pexels-photo-4954713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Refer a Friend",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "red",
    "Sub_Heading_Text": "Unlock Exclusive Experiences",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover the magic of our hospitality with our exciting referral program. ",
    "Analysis": [
      {
        "Content_Description": "A red lighthouse stands tall on a rocky shore, illuminated by its own light beam, against a backdrop of a star-filled night sky. The Milky Way stretches across the sky, creating a breathtaking celestial display.",
        "Dominant_Colors": ["black", "blue", "white", "red"],
        "Contextual_Analysis": "The image captures a serene and awe-inspiring night scene, showcasing the beauty of nature and the power of human ingenuity. The lighthouse, a symbol of guidance and safety, stands as a beacon against the vastness of the cosmos.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 67894,
    "campaignName": "Refer a Friend: Share the Love, Earn Rewards",
    "creativegraphic": "https://images.pexels.com/photos/27200831/pexels-photo-27200831/free-photo-of-a-laptop-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h2",
    "Heading_Font": "Arial",
    "Heading_Color": "black",
    "Heading_Text": "Refer a Friend:",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Work from Home, Enjoy the Perks",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Invite your friends to experience the comfort and convenience of our hospitality services.Every successful referral earns you exclusive rewards, making your work-from-home life even more enjoyable.Share the love, and lets make working from home a breeze.",
    "Analysis": [
      {
        "Content_Description": "A white desk with a laptop, a mouse, a lamp, a glass of water with a straw, a stack of books, and a small object on the right side of the desk. The laptop is open and displaying a photo gallery. The lamp is turned on and is casting a warm glow on the desk. The glass of water is empty, and the straw is sticking out of it.",
        "Dominant_Colors": ["white", "gray", "brown", "black"],
        "Contextual_Analysis": "The image depicts a workspace in a home office, likely during the day. The mood is calm and inviting, suggesting a productive and relaxed environment. ",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 41874,
    "campaignName": "Exclusive Events for Members",
    "creativegraphic": "https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Exclusive Events",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "pink",
    "Sub_Heading_Text": "Experience the Nightlife Like Never Before",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Join our exclusive membership program and unlock a world of unforgettable experiences.",
    "Analysis": [
      {
        "Content_Description": "Two people are dancing in a nightclub. The man is wearing a blue and pink floral shirt and headphones. The woman is wearing a white tank top and black shorts. They are both smiling and having fun. The club is brightly lit with blue and pink lights. ",
        "Dominant_Colors": ["blue", "pink", "white"],
        "Contextual_Analysis": "setting, nightclub, time of day, night, mood, happy, event, party",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 48564,
    "campaignName": "Exclusive Events for Members",
    "creativegraphic": "https://images.pexels.com/photos/8085338/pexels-photo-8085338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Unwind in Exclusive Luxury",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Experience Privileged Moments at Our Private Oasis",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a world of exclusive experiences designed for our discerning members. From private poolside relaxation to curated events, our resort offers unparalleled luxury and personalized service. Join our membership community and unlock a world of curated moments crafted for your discerning taste.",
    "Analysis": [
      {
        "Content_Description": "A white building with a palm tree in front of it. The building has a balcony and a swimming pool in front of it. ",
        "Dominant_Colors": ["white", "blue", "green"],
        "Contextual_Analysis": "The image is taken from the edge of the pool, looking towards a building. The setting is a tropical resort, and the time of day is likely late afternoon or early evening. The mood is calm and relaxing.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 16164,
    "campaignName": "Exclusive Events for Members",
    "creativegraphic": "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Exclusive Events",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Experience the Difference",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Immerse yourself in a world of exclusive events, crafted specifically for our valued members. From intimate gatherings to vibrant celebrations, our curated experiences offer unparalleled service and a sense of community. Join us and discover the true meaning of hospitality, where every detail is meticulously designed for your enjoyment.",
    "Analysis": [
      {
        "Content_Description": "The image shows an indoor restaurant with wooden tables and chairs, and a woven ceiling. There are plants hanging from the ceiling and the walls. The tables are set with white tablecloths and napkins. There is a bar in the background, and a stage with a microphone. ",
        "Dominant_Colors": ["brown", "yellow", "white"],
        "Contextual_Analysis": "The image depicts a dimly lit restaurant with a relaxed atmosphere. The setting is indoors, and the time of day is likely evening. The mood is calm and inviting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 57974,
    "campaignName": "Exclusive Events for Members",
    "creativegraphic": "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Exclusive",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Unwind",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience",
    "Analysis": [
      {
        "Content_Description": "A cozy living room with a white brick wall, a brown leather armchair with a patterned pillow, a round ottoman, a wooden coffee table, and a shelf filled with books. There are dried pampas grasses in a woven vase near the window. The room has a warm and inviting atmosphere.",
        "Dominant_Colors": ["brown", "white", "beige"],
        "Contextual_Analysis": "Setting, indoors, Time of Day, daytime, Mood, cozy and inviting",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 90574,
    "campaignName": "Milestone Rewards: Celebrate Your Loyalty",
    "creativegraphic": "https://images.pexels.com/photos/2311713/pexels-photo-2311713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Milestone Rewards: Celebrate Your Loyalty",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Unlock Exclusive Perks and Experiences",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Join our loyalty program and earn points with every stay.Redeem your points for amazing rewards, from complimentary upgrades to unforgettable experiences. lets celebrate your journey with us!",
    "Analysis": [
      {
        "Content_Description": "A costumed bear wearing sunglasses is performing on stage in front of a crowd of people. The bear is wearing a black shirt with a white logo on it. The crowd is mostly made up of young adults who are dancing and enjoying the performance. The stage is lit with blue and green lights.",
        "Dominant_Colors": ["black", "brown", "blue", "white"],
        "Contextual_Analysis": "The image depicts a lively concert or party atmosphere. The setting is indoors, likely a nightclub or concert venue, and the time is probably night. The mood conveyed is one of excitement and energy.",
        "Text_Recognition": [
          "The text on the bears shirt is Bad Drip."
        ]
      }
    ]
  },
  {
    "creativeID": 40944,
    "campaignName": "Milestone Rewards: Celebrate Your Loyalty",
    "creativegraphic": "https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Milestone Rewards: Celebrate Your Loyalty",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Unlock Exclusive Perks for Your Stay",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Experience the ultimate comfort and luxury with our Milestone Rewards program. As a valued guest, earn points for every stay and redeem them for exclusive benefits, including upgrades, dining credits, and more. The more you stay, the more you earn. Let us pamper you with personalized experiences tailored to your preferences. Start celebrating your loyalty today!",
    "Analysis": [
      {
        "Content_Description": "A bedside table with a lamp and two pillows on the bed behind it.",
        "Dominant_Colors": ["white", "brown", "beige"],
        "Contextual_Analysis": "The image depicts a bedroom setting, likely in a hotel room, with a bedside table and a bed with white pillows. The mood conveyed is one of comfort and relaxation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 38714,
    "campaignName": "Milestone Rewards: Celebrate Your Loyalty",
    "creativegraphic": "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Milestone Rewards: Celebrate Your Loyalty",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Taste of Appreciation",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Indulge in delicious cuisine and exceptional service, all while earning rewards for your loyalty. Every meal is a milestone, every visit a celebration. Join our program and unlock exclusive benefits, personalized experiences, and the ultimate dining satisfaction.",
    "Analysis": [
      {
        "Content_Description": "A table with a variety of food and drinks, including a salad, pasta, potatoes, olives, bread, and wine. There are also several glasses of wine and water on the table. The table is covered with a red tablecloth. ",
        "Dominant_Colors": ["brown", "white", "red", "green"],
        "Contextual_Analysis": "The image depicts a dining scene, likely at a restaurant or a home, with a variety of dishes and drinks. The setting appears to be outdoors due to the wooden table and the natural light. The mood is relaxed and inviting, suggesting a pleasant dining experience.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 69434,
    "campaignName": "Milestone Rewards: Celebrate Your Loyalty",
    "creativegraphic": "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "orange",
    "Heading_Text": "Milestone Rewards: Celebrate Your Loyalty",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Unwind and Relax at Your Favorite Destination",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the ultimate vacation bliss with our Milestone Rewards program.Earn points with every stay and unlock exclusive perks, including luxurious accommodations, complimentary spa treatments, and unforgettable dining experiences.Indulge in the tranquility of our tropical paradise and let us reward your loyalty with exceptional experiences tailored just for you.",
    "Analysis": [
      {
        "Content_Description": "A resort pool with orange bean bags surrounding the pool. There are palm trees in the background and a white building in the distance.",
        "Dominant_Colors": ["blue", "orange", "green", "white"],
        "Contextual_Analysis": "This is a tranquil and relaxing scene, likely at a resort or hotel. The bright colors and lush vegetation create a tropical paradise atmosphere. The time of day is likely daytime, as the sun is shining brightly.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7331,
    "campaignName": "Urban Oasis",
    "creativegraphic": "https://images.pexels.com/photos/8606426/pexels-photo-8606426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "beige",
    "Heading_Text": "Escape to Your Urban Oasis",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Experience Unparalleled Tranquility",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Step into a sanctuary of serenity amidst the bustling city. Our meticulously designed living spaces offer a harmonious blend of modern comfort and timeless elegance. Sink into plush, floral-patterned couches, bask in the warmth of natural light streaming through expansive windows, and let the gentle murmur of the city fade into the background. Our urban oasis awaits, providing the perfect escape for moments of rejuvenation and pure indulgence.",
    "Analysis": [
      {
        "Content_Description": "A man in a grey jacket and sunglasses sits on a large, ornate couch in a sunlit living room. The couch has floral patterned upholstery and a few throw pillows. He is looking out the window at a green lawn beyond. There is a coffee table in front of him with a decorative tray on it.  There is another couch to the left of the frame, and a small table with a decorative black panther figurine on it to the right.",
        "Dominant_Colors": ["beige", "brown", "green"],
        "Contextual_Analysis": "The image depicts a man relaxing in a luxurious living room of a large home. The setting is indoors, and the time of day is likely afternoon or early evening, as the light is bright and warm. The mood conveyed is one of tranquility and comfort.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 2725,
    "campaignName": "Urban Oasis",
    "creativegraphic": "https://images.pexels.com/photos/24516369/pexels-photo-24516369/free-photo-of-painting-of-sultan-over-sofa-in-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Georgia",
    "Heading_Color": "gold",
    "Heading_Text": "Escape to Your Urban Oasis",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "red",
    "Sub_Heading_Text": "Experience Luxury Redefined",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "cream",
    "Body_Text": "Indulge in opulent comfort and unparalleled service at our hotel, your sanctuary in the heart of the city. Immerse yourself in the refined elegance of our meticulously designed spaces, where every detail whispers luxury. From the intricately patterned fabrics to the shimmering chandeliers, our oasis promises an unforgettable escape from the ordinary.",
    "Analysis": [
      {
        "Content_Description": "A room with a couch and chair, both with red and gold striped upholstery and ornate gold trim, and a painting of a man in a turban on the wall. The room is decorated in a luxurious style, with a chandelier hanging from the ceiling and a vase on a table in the corner.",
        "Dominant_Colors": ["cream", "gold", "red"],
        "Contextual_Analysis": "The setting is an indoor room, likely a drawing-room or parlor, decorated in a traditional style. The time of day is unclear, but the lighting suggests daytime. The mood conveyed is one of elegance and grandeur.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7707,
    "campaignName": "Urban Oasis",
    "creativegraphic": "https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Discover Tranquility in the Heart of the City",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Imagine waking up to the serene sounds of nature, yet being just steps away from the vibrant pulse of urban life. Our urban oasis offers a sanctuary of comfort and convenience, where you can unwind and recharge amidst the hustle and bustle. Experience the perfect balance of peace and adventure, where history meets modern luxury. Book your stay today and rediscover the art of living.",
    "Analysis": [
      {
        "Content_Description": "The image shows the Colosseum in Rome, Italy. It is a large, ancient amphitheater made of stone. The Colosseum is surrounded by trees and bushes, and there are people walking around it. The sky is blue and there is a white plane trail in the sky. There is a street lamp in the front right of the image.",
        "Dominant_Colors": ["brown", "blue", "gray", "green"],
        "Contextual_Analysis": "The image was taken during the day, likely in the afternoon or evening. The setting is outdoors, and the mood is peaceful and serene.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5157,
    "campaignName": "Urban Oasis",
    "creativegraphic": "https://images.pexels.com/photos/24551620/pexels-photo-24551620/free-photo-of-desk-and-chairs-near-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Escape the City",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Find Your Tranquility",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Step into a world of serenity and productivity. Our Urban Oasis offers a harmonious blend of nature and modern comfort.Imagine working at a desk bathed in natural light, surrounded by lush greenery.This is where inspiration flourishes and stress melts away.Discover your own private sanctuary in the heart of the city.",
    "Analysis": [
      {
        "Content_Description": "A wooden desk with a black frame sits in front of a window with a view of trees. A chair sits next to the desk with a denim jacket draped over the back. There is a backpack on the chair and a notebook and pen on the desk.",
        "Dominant_Colors": ["brown", "green", "blue", "white"],
        "Contextual_Analysis": "The image depicts a study space in a home or office. The setting is indoors, and the time of day is likely daytime. The mood conveyed is calm and peaceful.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 73314,
    "campaignName": "Luxury Re-imagined",
    "creativegraphic": "https://images.pexels.com/photos/8606426/pexels-photo-8606426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Luxury Re-imagined",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Experience Unparalleled Comfort",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Indulge in the epitome of luxury at our exclusive retreat. ",
    "Analysis": [
      {
        "Content_Description": "A man in a gray jacket and blue jeans sits on a large, ornately carved couch in a sunlit room. He is wearing sunglasses and has a beard. There are several large windows in the room, with a view of a lush green lawn and trees. A coffee table with a tray and a tissue box sits in front of the couch, and there is another couch in the background. A small, ornate sculpture of a black panther sits on a side table in the background.",
        "Dominant_Colors": ["beige", "brown", "green", "white"],
        "Contextual_Analysis": "The image depicts a luxurious living room with a relaxed and comfortable atmosphere. The man in the photo appears to be enjoying the view from the large windows and the comfortable seating. The warm lighting and the lush green scenery outside create a sense of peace and tranquility.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 27254,
    "campaignName": "Luxury Re-imagined",
    "creativegraphic": "https://images.pexels.com/photos/24516369/pexels-photo-24516369/free-photo-of-painting-of-sultan-over-sofa-in-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Gold",
    "Heading_Text": "Luxury Reimagined: Where Elegance Meets Comfort",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Times New Roman",
    "Sub_Heading_Color": "Red",
    "Sub_Heading_Text": "Experience a New Era of Hospitality",
    "Body_Size": "Body Text",
    "Body_Font": "Arial",
    "Body_Color": "White",
    "Body_Text": "Step into a world of unparalleled luxury, meticulously crafted to elevate your every experience. Our reimagined spaces blend timeless elegance with modern comfort, creating an atmosphere that transcends expectations. Discover a haven of refined details, where every touchpoint exudes sophistication and warmth.",
    "Analysis": [
      {
        "Content_Description": "The image shows a room with a couch and a chair. The couch is a gold and red striped couch, and the chair is gold and red striped. There is a painting on the wall, and a chandelier hanging from the ceiling. The walls are a light beige color, and the floor is a dark wood.",
        "Dominant_Colors": ["gold", "red", "white"],
        "Contextual_Analysis": "The image is taken in a room with a luxurious feel. The room is likely a living room or drawing room. The time of day is unclear, but the lighting suggests that it is daytime. The mood conveyed is one of elegance and grandeur.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 77074,
    "campaignName": "Luxury Re-imagined",
    "creativegraphic": "https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Luxury Re-imagined",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Experience History, Redefined",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "gray",
    "Body_Text": "Escape to the heart of Rome and witness the grandeur of the Colosseum, a symbol of history and timeless elegance.",
    "Analysis": [
      {
        "Content_Description": "The image shows the Colosseum in Rome, Italy. It is a large, ancient amphitheater made of stone. The Colosseum is surrounded by trees and bushes. There are people walking around the Colosseum. The sky is blue and there is a plane flying overhead. The sun is setting in the background, casting a warm glow on the scene.",
        "Dominant_Colors": ["brown", "blue", "gray", "green"],
        "Contextual_Analysis": "The image captures a serene and historical scene, likely taken during sunset. The warm hues and the presence of people suggest a peaceful and touristy atmosphere.",
        "Text_Recognition": ["NEWS"]
      }
    ]
  },
  {
    "creativeID": 51574,
    "campaignName": "Luxury Re-imagined",
    "creativegraphic": "https://images.pexels.com/photos/24551620/pexels-photo-24551620/free-photo-of-desk-and-chairs-near-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Luxury Re-imagined: Where Work Meets Tranquility",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Escape the Ordinary, Embrace the Extraordinary",
    "Body_Size": "body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine a workspace that inspires creativity and fosters serenity. Our luxury accommodations offer a sanctuary where productivity meets peace.Immerse yourself in a world of comfort and elegance, surrounded by breathtaking views and meticulously designed spaces.Experience the ultimate blend of sophistication and tranquility, designed to elevate your every moment.",
    "Analysis": [
      {
        "Content_Description": "A wooden desk with a black metal frame sits in front of a window with a view of green trees. A chair is pulled up to the desk, and a backpack is sitting on it. A denim jacket is draped over the back of the chair. ",
        "Dominant_Colors": ["brown", "white", "green", "blue"],
        "Contextual_Analysis": "The image depicts a cozy and relaxing workspace, likely located in a home office or study. The natural light streaming in through the windows creates a bright and airy atmosphere, while the greenery outside suggests a peaceful and tranquil setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6605,
    "campaignName": "Desert Oasis",
    "creativegraphic": "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "red",
    "Heading_Text": "Escape to Your",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Rejuvenate your body and soul with a healthy escape",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a vibrant smoothie bowl bursting with fresh fruit, nuts, and coconut flakes, a refreshing oasis in the heart of your day. Experience the vibrant colors and invigorating flavors of a healthy escape, leaving you feeling energized and revitalized. Discover the serenity of a desert oasis, one delicious bite at a time.",
    "Analysis": [
      {
        "Content_Description": "A white bowl filled with a pink smoothie topped with fresh fruit, nuts, and coconut flakes.  Surrounding the bowl are various fruits, including strawberries, blueberries, blackberries, and mango. A silver spoon is lying on the table near the bowl.",
        "Dominant_Colors": ["red", "yellow", "white", "green", "blue", "black"],
        "Contextual_Analysis": "The image depicts a healthy and delicious breakfast or snack. The bright colors and fresh ingredients convey a sense of vitality and wellness.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4712,
    "campaignName": "Desert Oasis",
    "creativegraphic": "https://images.pexels.com/photos/297984/pexels-photo-297984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Blue",
    "Heading_Text": "Escape to Your Desert Oasis",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Green",
    "Sub_Heading_Text": "Luxury awaits in the heart of the desert.",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "Brown",
    "Body_Text": "Indulge in a tranquil retreat amidst lush greenery and sparkling blue waters.",
    "Analysis": [
      {
        "Content_Description": "A wooden bridge spans a sparkling blue pool in a tropical resort. The pool is surrounded by lush greenery and red buildings with ornate arches. Palm trees sway gently in the warm sunlight. The scene evokes a sense of relaxation and luxury.",
        "Dominant_Colors": ["blue", "brown", "green", "red"],
        "Contextual_Analysis": "Setting, Outdoors, Time of Day, Daytime, Mood, Relaxing, Luxurious",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 66054,
    "campaignName": "Flash Sale: 48 Hours to Save",
    "creativegraphic": "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "red",
    "Heading_Text": "Flash Sale: 48 Hours to Save",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Start Your Day with a Burst of Flavor and Savings",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Indulge in a healthy and delicious breakfast or snack with our limited-time Flash Sale.",
    "Analysis": [
      {
        "Content_Description": "A white bowl filled with a smoothie topped with mango, raspberries, blueberries, almonds, and shredded coconut. The bowl is surrounded by various fruits, including strawberries, blueberries, raspberries, and blackberries. There is also a sprig of dill and a silver spoon on the table.",
        "Dominant_Colors": ["red", "yellow", "blue", "white", "green", "black"],
        "Contextual_Analysis": "The image depicts a healthy and delicious breakfast or snack, likely prepared at home or in a cafe. The arrangement of the fruits and the bowl suggests a carefully crafted and aesthetically pleasing presentation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 47124,
    "campaignName": "Flash Sale: 48 Hours to Save",
    "creativegraphic": "https://images.pexels.com/photos/297984/pexels-photo-297984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Flash Sale: 48 Hours to Escape",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Unwind and Recharge at Unbeatable Rates",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Escape to paradise with our limited-time Flash Sale! ",
    "Analysis": [
      {
        "Content_Description": "A wooden bridge over a blue swimming pool, with red buildings and palm trees in the background. The sun is shining brightly, casting long shadows.",
        "Dominant_Colors": ["blue", "red", "brown", "green"],
        "Contextual_Analysis": "The image depicts a resort pool area on a sunny day. The bright colors and tropical setting create a sense of relaxation and vacation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6780,
    "campaignName": "Winter Wonderland",
    "creativegraphic": "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "gray",
    "Heading_Text": "Winter Wonderland Awaits",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Experience the magic of London this winter.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Discover the enchanting charm of London during the winter season. Immerse yourself in the city's festive atmosphere, adorned with twinkling lights and festive cheer. Explore iconic landmarks, including Big Ben, the Houses of Parliament, and Westminster Abbey, draped in a blanket of winter magic. Indulge in cozy pubs, enjoy delicious festive treats, and create unforgettable memories. Book your winter getaway to London today and experience the city's captivating winter wonderland.",
    "Analysis": [
      {
        "Content_Description": "An aerial view of the Houses of Parliament in London, England. The iconic Big Ben clock tower is prominent in the foreground, with the River Thames flowing in front of it. The Houses of Parliament building is on the left side of the image, and Westminster Abbey is on the right. There are many people walking on the bridge in front of the Houses of Parliament.",
        "Dominant_Colors": ["gray", "brown", "blue", "white", "green"],
        "Contextual_Analysis": "The image captures a sunny day in London, showcasing the citys famous landmarks from an aerial perspective. The mood is one of tranquility and grandeur, highlighting the historical significance of the scene.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6040,
    "campaignName": "Winter Wonderland",
    "creativegraphic": "https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Your Winter Wonderland",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience Unforgettable Luxury at Floga",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in the breathtaking beauty of Floga, a serene oasis nestled on a cliff overlooking the azure Mediterranean Sea.Imagine waking up to panoramic views,basking by the sparkling pool, and exploring charming whitewashed buildings.Floga offers an idyllic escape,where tranquility meets sophistication,and winter becomes a wonderland.Book your stay today and discover the magic of Floga.",
    "Analysis": [
      {
        "Content_Description": "A high angle view of a whitewashed building complex on a cliff overlooking a blue sea. The buildings are all white with blue accents and have flat roofs. There is a small pool on the roof of one of the buildings. There are people walking around the complex and a sailboat is visible in the distance.",
        "Dominant_Colors": ["blue", "white"],
        "Contextual_Analysis": "The image depicts a sunny day in a coastal town. The white buildings and blue water suggest a Mediterranean location. The image conveys a sense of peace and tranquility.",
        "Text_Recognition": [
          "Floga"
        ]
      }
    ]
  },
  {
    "creativeID": 2325,
    "campaignName": "Winter Wonderland",
    "creativegraphic": "https://images.pexels.com/photos/4394274/pexels-photo-4394274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "gray",
    "Heading_Text": "Escape to a Winter Wonderland",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Discover Serenity and Classical Beauty",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in the tranquility of our winter oasis.Experience the timeless elegance of our resort, where intricate details and serene ambiance create a haven of peace and rejuvenation.",
    "Analysis": [
      {
        "Content_Description": "A white marble statue of a woman holding a large urn over her head. The statue is carved with intricate details and appears to be weathered.",
        "Dominant_Colors": ["white", "gray", "green"],
        "Contextual_Analysis": "The statue is likely located outdoors, possibly in a garden or park. The green background suggests foliage and the overall tone of the image conveys a sense of serenity and classical beauty.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5694,
    "campaignName": "Winter Wonderland",
    "creativegraphic": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Warm Up Your Winter with a Taste of Italy",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Indulge in Our Delicious Spaghetti Special",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape the winter chill with our comforting Spaghetti special, featuring fresh spinach, juicy cherry tomatoes, and creamy mozzarella cheese. it's the perfect dish to warm your soul and satisfy your cravings.",
    "Analysis": [
      {
        "Content_Description": "A fork is lifting a portion of spaghetti from a white plate. The spaghetti is topped with cherry tomatoes, spinach, and mozzarella cheese. The plate is on a gray textured surface.",
        "Dominant_Colors": ["white", "brown", "green", "red"],
        "Contextual_Analysis": "The image depicts a close-up of a plate of spaghetti, suggesting a meal or food preparation. The setting appears to be a kitchen or dining area.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8275,
    "campaignName": "Beachfront Escapes",
    "creativegraphic": "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Tranquility",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Discover Your Beachfront Oasis",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine waking up to the gentle sounds of nature, a breathtaking view of lush greenery from your private balcony, and the promise of a day filled with relaxation and rejuvenation. Our beachfront escapes offer a sanctuary for your soul, where you can unwind in luxurious accommodations and immerse yourself in the beauty of the natural world.",
    "Analysis": [
      {
        "Content_Description": "The image shows a woman standing on a balcony overlooking a lush green forest. She is wearing a blue dress and has her back to the camera. The balcony is enclosed by wooden railings and sheer curtains. Inside the room, there is a bed with a canopy. The bed is made up with white linens and has two pillows. The room is dimly lit and has a rustic feel.",
        "Dominant_Colors": ["brown", "white", "blue"],
        "Contextual_Analysis": "The image depicts a serene and tranquil setting, likely a bedroom in a tropical resort. The womans relaxed posture and the natural surroundings create a sense of peace and tranquility.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8883,
    "campaignName": "Beachfront Escapes",
    "creativegraphic": "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Escape to Coastal Serenity",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Find Your Sanctuary by the Sea",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Imagine waking up to the gentle sound of waves crashing on the shore, stepping onto a private balcony with breathtaking ocean views, and indulging in luxurious amenities that cater to your every need. Our beachfront escapes offer the ultimate relaxation and rejuvenation, where you can disconnect from the everyday and reconnect with yourself. Our meticulously designed accommodations feature cozy living spaces, perfect for unwinding after a day of exploration. So, escape the ordinary and embark on a journey to coastal bliss.",
    "Analysis": [
      {
        "Content_Description": "A white couch with pillows sits in a living room with a woven rug on the floor. There are two gold side tables in front of the couch, and a woven ottoman sits between them. A vase with dried flowers sits on the tables.",
        "Dominant_Colors": ["white", "brown", "beige", "gold"],
        "Contextual_Analysis": "setting, indoors, time of day, day, mood, calm and serene",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8277,
    "campaignName": "Beachfront Escapes",
    "creativegraphic": "https://images.pexels.com/photos/24743611/pexels-photo-24743611/free-photo-of-tourists-visiting-the-mortuary-temple-of-hatshepsut.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Heading_Size": "48px",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Beachfront Escapes:",
    "Sub_Heading_Size": "24px",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Where History Meets Luxury",
    "Body_Size": "16px",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a world of wonder and relaxation with Beachfront Escapes.",
    "Analysis": [
      {
        "Content_Description": "A group of tourists are standing in front of a large ancient temple, with a large rock formation behind them.",
        "Dominant_Colors": ["brown", "blue", "white", "tan", "orange", "yellow", "green"],
        "Contextual_Analysis": "The setting is outdoors, likely in a desert environment. The time of day appears to be daytime, with a bright blue sky. The mood conveyed is one of wonder and excitement, as tourists explore a historical site.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8175,
    "campaignName": "Exotic Escapes",
    "creativegraphic": "https://images.pexels.com/photos/3670580/pexels-photo-3670580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Indulge in Exotic Escapes",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Discover a World of Exquisite Experiences",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "cream",
    "Body_Text": "Escape the ordinary and embark on a journey of culinary delights. Our meticulously crafted pastries and aromatic coffee will transport you to a world of pure indulgence. Whether you're seeking a cozy breakfast or a sophisticated brunch, our inviting atmosphere provides the perfect setting for creating unforgettable memories.",
    "Analysis": [
      {
        "Content_Description": "A table with a tray holding two pastries, a cup of coffee, and a small teapot. The pastries are both covered in white sugar. The coffee is in a white mug, and the teapot is silver. The table is white with a gold rim.",
        "Dominant_Colors": ["brown", "white", "cream"],
        "Contextual_Analysis": "The image depicts a simple breakfast or brunch setting, likely in a cafe or restaurant. The warm colors and the pastries suggest a cozy and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 9603,
    "campaignName": "Exotic Escapes",
    "creativegraphic": "https://images.pexels.com/photos/4021887/pexels-photo-4021887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "yellow",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Unwind and Rejuvenate",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in the ultimate escape with our exclusive hospitality packages. Experience the tropical bliss of our luxurious resorts, where pristine beaches, crystal-clear waters, and refreshing cocktails await. Let go of your worries and embrace the serenity of paradise.",
    "Analysis": [
      {
        "Content_Description": "A glass of lemonade with lemon slices and mint leaves. A whole lemon slice is sitting next to the glass.",
        "Dominant_Colors": ["white", "yellow", "green"],
        "Contextual_Analysis": "The image depicts a refreshing drink on a light blue background, conveying a sense of summer and relaxation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8114,
    "campaignName": "Exotic Escapes",
    "creativegraphic": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Start Your Day with Exotic Flavors",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Indulge in our decadent breakfast creations.",
    "Body_Size": "P",
    "Body_Font": "Arial",
    "Body_Color": "red",
    "Body_Text": "Our breakfast menu features mouthwatering pancakes, crafted with the finest ingredients and topped with a symphony of flavors. Each bite is a journey to culinary paradise, promising an exotic escape for your taste buds.",
    "Analysis": [
      {
        "Content_Description": "A plate of pancakes topped with caramel sauce, strawberries, and walnuts, with a side of whipped cream.",
        "Dominant_Colors": ["brown", "white", "red"],
        "Contextual_Analysis": "The image depicts a breakfast or brunch setting, with a focus on the delicious pancakes.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 1944,
    "campaignName": "Exotic Escapes",
    "creativegraphic": "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Discover the Enchanting Beauty of a Coastal Gem",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Imagine yourself waking up to the gentle caress of sea breeze, the sun casting a golden glow over a quaint coastal town nestled on a cliffside.",
    "Analysis": [
      {
        "Content_Description": "A picturesque coastal town nestled on a cliffside overlooking a sparkling blue sea. The town features colorful buildings, a prominent tower, and a small harbor with boats. Lush green hills surround the town, adding to the scenic beauty. The image captures a serene and idyllic atmosphere, showcasing the charm of a seaside village.",
        "Dominant_Colors": ["blue", "green", "brown", "yellow"],
        "Contextual_Analysis": "The image depicts a coastal town, likely in a Mediterranean region, during a sunny day. The clear blue sky and calm sea contribute to a tranquil and inviting ambiance.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5061,
    "campaignName": "Exotic Escapes",
    "creativegraphic": "https://images.pexels.com/photos/3697742/pexels-photo-3697742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Times New Roman",
    "Heading_Color": "gold",
    "Heading_Text": "Escape to Opulence",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Grandeur of Your Dreams",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in luxury and explore the world's most exquisite destinations. Our handpicked collection of palaces, castles, and opulent retreats offer unparalleled experiences. Discover the ultimate escape to a realm of grandeur and historical charm.",
    "Analysis": [
      {
        "Content_Description": "The image shows a grand staircase in a palace. The staircase is made of white marble with a gold railing. The walls are decorated with intricate gold designs and sculptures. There are large windows on either side of the staircase, letting in natural light. The ceiling is painted with ornate frescoes. The overall mood of the image is elegant and luxurious.",
        "Dominant_Colors": ["white", "gold"],
        "Contextual_Analysis": "The image depicts a grand interior of a palace. The setting is indoors, likely a grand hall or a formal staircase. The mood is one of opulence and grandeur, suggesting a historical or royal setting. The time of day is not clear, but the natural light coming through the windows suggests that it is daytime.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 4135,
    "campaignName": "Mountain Adventures",
    "creativegraphic": "https://images.pexels.com/photos/19883382/pexels-photo-19883382/free-photo-of-view-of-a-room-in-oread-cave-suites-urgup-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Mountain Luxury",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Indulge in Unforgettable Mountain Adventures",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine waking up to breathtaking mountain views from your cozy, opulent retreat.",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a large bed, a wooden headboard, and a large mirror above it. There is a wooden nightstand next to the bed with a vintage rotary phone on it. The room has a spiral staircase leading up to a higher level. There is also a fireplace in the room. ",
        "Dominant_Colors": ["brown", "beige", "white", "red"],
        "Contextual_Analysis": "The image depicts a luxurious hotel room. The room is decorated in an ornate style, with a large bed, a spiral staircase, and a fireplace. The room is lit by a chandelier and a lamp on the nightstand. The room appears to be indoors and the time of day is likely daytime. The mood conveyed by the image is one of luxury and comfort.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7442,
    "campaignName": "Mountain Adventures",
    "creativegraphic": "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Mountain Serenity",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Unwind under the Stars",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Imagine yourself nestled in a cozy outdoor patio, bathed in the warm glow of string lights. Sink into plush seating, a blanket draped across your lap, as you sip on a glass of fine wine with loved ones. This is the essence of our Mountain Adventures, where every detail is curated for relaxation and unforgettable moments.",
    "Analysis": [
      {
        "Content_Description": "The image shows a cozy outdoor patio at night, illuminated by string lights. There are two lounge chairs with pillows and a blanket. A small table with a bottle of wine and glasses sits between them. The patio is decorated with a rug, lanterns, and candles.  The scene is intimate and inviting, suggesting a relaxing evening outdoors.",
        "Dominant_Colors": ["brown", "white", "black", "yellow", "grey"],
        "Contextual_Analysis": "The image portrays a relaxed and intimate setting, likely for a romantic evening or gathering with friends. The warm lighting, comfortable seating, and presence of wine suggest a casual and enjoyable atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3900,
    "campaignName": "Mountain Adventures",
    "creativegraphic": "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to the Mountains",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "tan",
    "Sub_Heading_Text": "Discover the ultimate mountain getaway",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine yourself relaxing in a cozy living room, surrounded by stunning mountain views.",
    "Analysis": [
      {
        "Content_Description": "A living room with a tan leather couch, two windows with white curtains, a wooden floor, a white rug, a wicker basket with a blanket, and a floor lamp. ",
        "Dominant_Colors": ["white", "tan", "brown"],
        "Contextual_Analysis": "The image depicts a living room that is well-lit and inviting. The white walls and curtains create a sense of openness and serenity, while the tan leather couch and wooden floor add warmth and comfort. The floor lamp provides a soft glow to the room, making it feel cozy and inviting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3041,
    "campaignName": "Mountain Adventures",
    "creativegraphic": "https://images.pexels.com/photos/3771833/pexels-photo-3771833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to the Mountains",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Relax, Recharge, and Rejuvenate",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Discover tranquility amidst breathtaking mountain vistas. Our cozy cafes and restaurants provide the perfect setting to unwind, connect with nature, and savor delicious culinary experiences.",
    "Analysis": [
      {
        "Content_Description": "A woman is sitting at a table in a restaurant or cafe, looking down at her phone and smiling. The table is made of wood and has a glass top. There is a glass of water on the table. The woman is wearing a white shirt and black pants. The restaurant or cafe is decorated in a traditional style, with dark wood furniture and floral upholstery.",
        "Dominant_Colors": ["white", "brown", "black", "beige"],
        "Contextual_Analysis": "The image depicts a woman enjoying a moment of leisure while using her phone in a cozy and well-lit indoor setting, possibly a cafe or restaurant.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6876,
    "campaignName": "Mountain Adventures",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1661923086373-73176f7c004a?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Tranquility",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Indulge in the Heart of the Mountains",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "beige",
    "Body_Text": "Imagine waking up to breathtaking mountain views, enveloped in the cozy embrace of a rustic retreat. Our meticulously crafted rooms offer the perfect blend of comfort and nature, where you can unwind and reconnect with yourself. Sink into plush bedding, enjoy a warm cup of tea by the window, and let the serene atmosphere wash over you.",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a large bed, a canopy, and two wicker chairs. The bed has a white duvet and two pillows. There is a small table with a tray of teacups and a vase of flowers next to the bed. The bedroom has a wooden floor and a large window with a view of a snow-capped mountain.",
        "Dominant_Colors": ["brown", "white", "tan", "beige", "black"],
        "Contextual_Analysis": "The bedroom is decorated in a rustic style with natural materials. The setting is indoors, and the time of day is likely evening. The mood is relaxing and inviting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5478,
    "campaignName": "Urban Escapes",
    "creativegraphic": "https://images.pexels.com/photos/5029310/pexels-photo-5029310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Escape the City",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Discover Urban Oasis",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Immerse yourself in a serene retreat, just steps away from the bustling city. Our courtyard oasis offers a tranquil escape with a sparkling pool, lush greenery, and a peaceful ambiance perfect for relaxation and rejuvenation.Unwind in the warm glow of the evening lanterns, surrounded by the gentle sounds of nature. This is your opportunity to disconnect, recharge, and rediscover your inner peace.",
    "Analysis": [
      {
        "Content_Description": "A courtyard with a swimming pool in the center. The courtyard is surrounded by white walls and lush green trees. There are chairs and tables around the pool, and a few lanterns are lit. The pool is turquoise blue and the water is calm and reflective. The courtyard is a peaceful and relaxing space.",
        "Dominant_Colors": ["white", "green", "blue", "brown"],
        "Contextual_Analysis": "The image depicts a serene courtyard setting, likely in a Mediterranean or Middle Eastern location. The white walls, lush greenery, and calming pool create a tranquil atmosphere. The presence of lanterns suggests an evening or nighttime setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5270,
    "campaignName": "Urban Escapes",
    "creativegraphic": "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Escape the Everyday",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Urban Retreats Await",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Discover the perfect urban escape at our luxurious hotels. Experience unparalleled comfort and convenience, with stunning city views and amenities designed to elevate your stay. Indulge in delicious cuisine, relax in our serene spaces, and explore the vibrant city at your doorstep.Book your urban escape today and rediscover the joy of travel.",
    "Analysis": [
      {
        "Content_Description": "A woman in a white robe is sitting on a bed in a hotel room, looking at her phone. There is a laptop on the bed in front of her and a tray of food on the table next to her. The window behind her offers a view of a city skyline. ",
        "Dominant_Colors": ["white", "gray", "blue"],
        "Contextual_Analysis": "The image depicts a woman enjoying a relaxing moment in a hotel room with a view of the city. The setting is indoors, likely a hotel room. The time of day is difficult to determine, but the soft lighting suggests either morning or evening. The mood conveyed is serene and peaceful.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7263,
    "campaignName": "Urban Escapes",
    "creativegraphic": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape the Ordinary",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Indulge in Authentic Indian Cuisine",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a world of tantalizing flavors with our vibrant Indian dishes. From the crispy pakoras to the rich, aromatic curries, every bite is a journey of taste and texture. Experience the warmth of hospitality and the joy of sharing a delectable meal with loved ones. Let our Urban Escapes take you on a culinary adventure you won't forget.",
    "Analysis": [
      {
        "Content_Description": "A table with a variety of Indian dishes, including naan bread, pakoras, and curries. The food is arranged in a visually appealing manner, with the naan bread in a basket, the pakoras on a plate, and the curries in small bowls. There is also a small bowl of green chutney.",
        "Dominant_Colors": ["brown", "white", "green", "red", "yellow"],
        "Contextual_Analysis": "The setting is a restaurant or a home dining table. The mood is one of celebration and enjoyment, with the food being presented in a festive manner.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6547,
    "campaignName": "Urban Escapes",
    "creativegraphic": "https://images.pexels.com/photos/6587906/pexels-photo-6587906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Urban Escapes: Your Oasis Awaits",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Escape the ordinary, embrace the extraordinary.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in the ultimate urban retreat. Our meticulously designed rooms offer a sanctuary of comfort and style, perfect for unwinding after a day of exploring the city. Immerse yourself in luxurious amenities, including plush bedding, cozy seating, and breathtaking views.Discover your perfect urban escape.",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a large bed in the center, a couch on the left side, and a window with curtains on the right side. The room is decorated in a modern style with a beige and brown color scheme. The bed has a white bedspread with a brown trim. The couch is also beige with a brown trim. The curtains are a dark brown color. The walls are white with a beige accent wall behind the bed.",
        "Dominant_Colors": ["white", "beige", "brown"],
        "Contextual_Analysis": "The image depicts a modern bedroom in a luxurious home. The room is well-lit and spacious, and the furniture is stylish and comfortable. The overall mood of the image is one of peace and tranquility.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7318,
    "campaignName": "Luxury Escapades",
    "creativegraphic": "https://images.pexels.com/photos/3182841/pexels-photo-3182841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Tranquility",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Indulge in Luxurious Comfort",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a sanctuary of serenity at our exquisite retreat. Immerse yourself in the soothing embrace of our plush bedding, surrounded by the calming ambiance of natural wood and verdant views. Unwind with a captivating read, as the gentle glow of a lantern casts a warm and inviting glow. Escape the ordinary and embark on a journey of pure relaxation and rejuvenation.",
    "Analysis": [
      {
        "Content_Description": "A person is lying in bed, reading a book. The bed is white and the room is made of wood. There is a window behind the person, showing a view of trees outside. There is a lantern on the wall next to the person.",
        "Dominant_Colors": ["white", "brown"],
        "Contextual_Analysis": "The image shows a person relaxing in a cozy cabin or bedroom. The scene is peaceful and tranquil, suggesting a quiet moment of reading and relaxation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6736,
    "campaignName": "Luxury Escapades",
    "creativegraphic": "https://images.pexels.com/photos/1524232/pexels-photo-1524232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Escape to Luxury",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "grey",
    "Sub_Heading_Text": "Unwind in Comfort",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Experience the epitome of luxury with our curated escapes.",
    "Analysis": [
      {
        "Content_Description": "A woman is lying in bed, covered by a blanket, and reading a book. She is holding the book up to her face. The bed is made with a white headboard and grey and blue pillows.",
        "Dominant_Colors": ["white", "grey", "blue"],
        "Contextual_Analysis": "The image conveys a sense of relaxation and peace. The woman is in a comfortable setting and appears to be enjoying her time reading.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5884,
    "campaignName": "Luxury Escapades",
    "creativegraphic": "https://images.pexels.com/photos/5806989/pexels-photo-5806989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "gold",
    "Heading_Text": "Luxury Escapes",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "cream",
    "Sub_Heading_Text": "Indulge in Opulence",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape to a world of refined elegance and unparalleled comfort.",
    "Analysis": [
      {
        "Content_Description": "The image shows a living room with a white fireplace, a large mirror on the wall, and a chandelier. There is a white couch in the right corner of the room, and a wicker chair in the left corner. The floor is made of wooden planks. The fireplace is decorated with a sculpture of three figures. There is a small, square, mirrored table in front of the fireplace. There is also an easel with a painting on it in the right corner of the room.",
        "Dominant_Colors": ["white", "cream", "gold", "brown"],
        "Contextual_Analysis": "The image depicts a cozy and elegant living room. The white walls and furniture create a sense of peace and tranquility. The gold accents add a touch of luxury. The painting on the easel suggests that this is a room where people can relax and enjoy art.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3413,
    "campaignName": "Luxury Escapades",
    "creativegraphic": "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "green",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Luxury Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Indulge in the ultimate escape at our tropical paradise. Unwind amidst lush greenery, soak up the sun by our sparkling pool, and let the gentle breeze carry you away to a world of pure bliss. Our exclusive accommodations offer unparalleled comfort and breathtaking views, ensuring an unforgettable experience. Discover the art of relaxation and rejuvenation.",
    "Analysis": [
      {
        "Content_Description": "An aerial view of a woman floating in a swimming pool. The pool is surrounded by lush greenery and two thatched-roof structures. The woman is wearing a red swimsuit and is floating on her back. ",
        "Dominant_Colors": ["green", "blue", "brown"],
        "Contextual_Analysis": "The image depicts a relaxing and serene scene. The woman is floating in the pool, surrounded by nature. The thatched-roof structures suggest a tropical location.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 5556,
    "campaignName": "Luxury Escapades",
    "creativegraphic": "https://images.pexels.com/photos/1841149/pexels-photo-1841149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "gray",
    "Heading_Text": "Luxury Escapades: Your Urban Retreat Awaits",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Wake up to breathtaking city views.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape the ordinary and immerse yourself in the heart of the city. Our luxurious accommodations offer a haven of tranquility, where you can unwind and recharge after a day of urban exploration.Indulge in the comfort of our plush bedding, framed by panoramic cityscapes that inspire a sense of awe and wonder.Embrace the perfect blend of urban sophistication and serene relaxation – your luxury escapade begins here.",
    "Analysis": [
      {
        "Content_Description": "A messy bed with white sheets and pillows, next to a window with gray curtains. The window looks out onto a city with buildings and balconies. ",
        "Dominant_Colors": ["white", "gray"],
        "Contextual_Analysis": "The image is of a bedroom with a bed that has not been made, suggesting that the person who sleeps in the bed has just gotten up. The city view outside the window suggests that the room is in an urban area. The overall mood of the image is one of calm and relaxation.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7978,
    "campaignName": "Family Fun",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1661962493427-910e3333cf5a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Tranquility",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience Luxurious Comfort",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "blue",
    "Body_Text": "Indulge in a serene retreat with our meticulously designed bedrooms.Every detail, from the plush bedding to the calming color palette, is curated to create a space where you can unwind and recharge.",
    "Analysis": [
      {
        "Content_Description": "The image shows a modern bedroom with a large bed, a nightstand, and a lamp. The bed is made with brown sheets and pillows. The nightstand is made of wood and has two drawers. The lamp is on the nightstand and is made of metal with a white shade. The bedroom is decorated with brown and blue walls. There is a window behind the bed, and it is covered with curtains. The room is lit by overhead lights.",
        "Dominant_Colors": ["brown", "white", "blue"],
        "Contextual_Analysis": "The image is of a modern bedroom, likely in a hotel or upscale home. The lighting and decor create a calming and sophisticated atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 8363,
    "campaignName": "Family Fun",
    "creativegraphic": "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "orange",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Unwind and Reconnect with Family",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Imagine waking up to breathtaking ocean views, the gentle sound of waves crashing on the shore, and the warm embrace of the tropical sun. Our resort offers the perfect escape for families seeking quality time and unforgettable memories. From luxurious accommodations to exciting activities, we cater to every need, ensuring a relaxing and rejuvenating experience for all.",
    "Analysis": [
      {
        "Content_Description": "A woman in a green swimsuit stands on a wooden railing overlooking an infinity pool and the ocean. The sun is setting in the background and the sky is a mix of orange, pink, and blue. There is a thatched roof hut to the right of the woman.",
        "Dominant_Colors": ["blue", "orange", "green", "brown"],
        "Contextual_Analysis": "The image conveys a sense of tranquility and relaxation. It is likely taken at a resort or a luxury hotel. The woman is enjoying the beautiful sunset and the serene atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 3747,
    "campaignName": "Family Fun",
    "creativegraphic": "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Unforgettable Family Memories Await",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine the gentle sea breeze, the rhythmic lapping of waves, and the soft glow of string lights as you create lasting memories with your loved ones. Our tropical paradise offers a serene escape, complete with luxurious accommodations, exciting activities, and breathtaking views.Book your family getaway today and experience the magic of our island haven.",
    "Analysis": [
      {
        "Content_Description": "A wooden pier extends out into a calm, turquoise sea at dusk. The pier is lined with wooden posts and string lights. At the end of the pier, a thatched-roof hut stands on stilts, and a group of people are gathered inside. The sky is a soft blue, and the water is reflecting the light from the setting sun.",
        "Dominant_Colors": ["blue", "brown", "white"],
        "Contextual_Analysis": "The image depicts a tranquil scene at dusk, suggesting a relaxing and peaceful atmosphere. The setting is a tropical island, likely a popular tourist destination.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 7842,
    "campaignName": "Family Fun",
    "creativegraphic": "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Unwind and Rejuvenate with Your Loved Ones",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a blissful getaway at our tropical resort, where pristine beaches, crystal-clear waters, and luxurious accommodations await. Create unforgettable memories with your family as you explore vibrant coral reefs, savor delectable cuisine, and bask in the warm sunshine. Discover a world of relaxation and adventure, perfect for a rejuvenating escape.",
    "Analysis": [
      {
        "Content_Description": "A couple is walking away from the camera on a wooden dock. They are both wearing white shirts and shorts. The woman is pulling a tan suitcase and the man is pulling a black suitcase. In the background is a turquoise ocean with a boat docked next to several huts.",
        "Dominant_Colors": ["blue", "white"],
        "Contextual_Analysis": "The image depicts a couple on vacation, likely arriving at a tropical resort. The setting is outdoors, on a dock, and the mood is relaxed and happy.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 6882,
    "campaignName": "Family Fun",
    "creativegraphic": "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Unwind and Create Memories with Your Family",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Imagine sunny days by the pool, refreshing dips in the crystal-clear waters, and evenings filled with laughter and relaxation. Our resort offers a serene escape for families seeking quality time together. With luxurious accommodations, world-class amenities, and endless opportunities for fun, We're the perfect destination to create lasting memories.",
    "Analysis": [
      {
        "Content_Description": "The image shows a resort with a swimming pool in the front. The resort has a white building with balconies and palm trees surrounding the pool. There are some chairs and tables set up around the pool. The sky is blue and there are some clouds in the sky. There is a person swimming in the pool.",
        "Dominant_Colors": ["blue", "white", "green"],
        "Contextual_Analysis": "The image is a sunny day at a resort. The setting is outdoors and the mood is relaxing.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 67804,
    "campaignName": "Limited-Time Offer: Escape to Relaxation",
    "creativegraphic": "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "gray",
    "Heading_Text": "Escape to Relaxation",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Limited-Time Offer",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Indulge in a rejuvenating escape to London, where history meets modern luxury. Our exclusive offer grants you access to unparalleled experiences, including breathtaking views of the Houses of Parliament and Big Ben. Immerse yourself in the city's vibrant energy and unwind in our serene accommodations.Don't miss this limited-time opportunity to create memories that will last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "An aerial view of the Houses of Parliament in London, England. The iconic Big Ben clock tower is visible in the center of the image, with the Houses of Parliament stretching out to the left. The River Thames flows in the foreground, with a bridge crossing it. The city of London can be seen in the background.",
        "Dominant_Colors": ["gray", "brown", "blue", "white"],
        "Contextual_Analysis": "The image captures a sunny day in London, with the citys iconic landmarks on display. The aerial perspective provides a unique view of the citys architecture and layout. The image evokes a sense of grandeur and history.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 60404,
    "campaignName": "Limited-Time Offer: Escape to Relaxation",
    "creativegraphic": "https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Tranquility: A Limited-Time Offer",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Charm of Greece",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a serene escape to the picturesque Greek village of Floga. Nestled on a cliff overlooking the sparkling Aegean Sea, this haven offers the perfect blend of relaxation and cultural immersion. Enjoy breathtaking views, traditional architecture, and a tranquil atmosphere. This limited-time offer includes exclusive access to our rooftop pool, where you can soak up the sun and unwind. Book your escape today and rediscover the art of relaxation.",
    "Analysis": [
      {
        "Content_Description": "The image shows a beautiful view of a white-washed village perched on a cliff overlooking the Aegean Sea. The village is built in a traditional Greek style, with white houses and blue doors and windows. There is a small pool on one of the rooftops, and a few people are walking around the village. The sea is a deep blue, and the sky is a clear, bright blue. The scene is peaceful and serene.",
        "Dominant_Colors": ["blue", "white"],
        "Contextual_Analysis": "The image captures a peaceful and serene scene of a Greek village on a cliff overlooking the Aegean Sea. The white houses, blue doors and windows, and the clear blue sky and sea create a sense of tranquility and beauty. The image suggests a sunny day, likely in the summer.",
        "Text_Recognition": ["Floga"]
      }
    ]
  },
  {
    "creativeID": 23254,
    "campaignName": "Limited-Time Offer: Escape to Relaxation",
    "creativegraphic": "https://images.pexels.com/photos/4394274/pexels-photo-4394274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "white",
    "Heading_Text": "Escape to Serenity",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Limited-Time Offer: Indulge in Tranquility",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Discover a sanctuary of peace and rejuvenation. Our exclusive offer invites you to escape the ordinary and immerse yourself in a world of luxurious relaxation. Unwind amidst serene landscapes, embrace tranquil moments, and rediscover your inner harmony.",
    "Analysis": [
      {
        "Content_Description": "A white marble statue of a woman holding a large urn above her head. The statue is outdoors and the background is blurred green.",
        "Dominant_Colors": ["white", "gray", "green"],
        "Contextual_Analysis": "The statue is likely in a garden or park setting. The lighting suggests it is daytime.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 56944,
    "campaignName": "Limited-Time Offer: Escape to Relaxation",
    "creativegraphic": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Escape to Relaxation",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Limited-Time Offer",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a culinary journey with our exquisite spaghetti dish, crafted with the freshest ingredients. Savor the rich flavors and vibrant colors as you escape to a moment of pure relaxation.",
    "Analysis": [
      {
        "Content_Description": "A fork is lifting a portion of spaghetti from a white plate. The spaghetti is topped with cherry tomatoes, fresh basil, and small pieces of white cheese. The plate is sitting on a light-colored speckled surface.",
        "Dominant_Colors": ["brown", "green", "white", "red"],
        "Contextual_Analysis": "The image depicts a close-up of a plate of spaghetti, suggesting a meal or a food-related context. The mood is likely one of appetite or enjoyment.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 82754,
    "campaignName": "Unlock a world of Possibilities",
    "creativegraphic": "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Unlock a World of Possibilities",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Escape to Tranquility",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a haven of luxury and relaxation. Our meticulously crafted rooms offer a sanctuary from the ordinary, where you can unwind and reconnect with yourself. Immerse yourself in the breathtaking views, embrace the comfort of our plush bedding, and let the gentle breezes carry away your worries.",
    "Analysis": [
      {
        "Content_Description": "A woman in a blue dress is standing on a balcony looking out at the view. She is in a room with a large bed with a canopy over it. The room is decorated in a rustic style with wooden beams and woven fabrics.",
        "Dominant_Colors": ["brown", "white", "blue"],
        "Contextual_Analysis": "The image depicts a relaxing and luxurious bedroom in a tropical setting. The womans relaxed posture and the soft lighting suggest a peaceful and tranquil mood.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 88834,
    "campaignName": "Unlock a world of Possibilities",
    "creativegraphic": "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Unlock a World of Possibilities",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Experience the Extraordinary",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover a haven of comfort and luxury, where every detail is thoughtfully curated to elevate your stay. Indulge in the serene ambiance, unwind in our stylish living spaces, and unlock a world of possibilities.Embrace the tranquility and let your senses be invigorated by the epitome of hospitality.",
    "Analysis": [
      {
        "Content_Description": "A white couch with wooden legs sits in front of a white wall. The couch has three white pillows and a beige throw pillow. There are two gold round tables in front of the couch. A woven rug is under the tables and a woven ottoman is in front of the couch. A vase with dried flowers sits on the table.",
        "Dominant_Colors": ["white", "beige", "brown", "gold"],
        "Contextual_Analysis": "The image is of a living room, likely in a modern home. The setting is indoors, the time of day is unknown, and the mood is calm and serene.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 82774,
    "campaignName": "Unlock a world of Possibilities",
    "creativegraphic": "https://images.pexels.com/photos/24743611/pexels-photo-24743611/free-photo-of-tourists-visiting-the-mortuary-temple-of-hatshepsut.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Unlock a World of Possibilities",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "orange",
    "Sub_Heading_Text": "Experience the Wonders of Ancient Civilizations",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Discover the rich history and culture of our destination. Our curated tours offer an immersive experience, allowing you to explore ancient temples, marvel at intricate carvings, and witness the majesty of bygone eras.Embrace the adventure and unlock a world of possibilities with our exclusive travel packages.",
    "Analysis": [
      {
        "Content_Description": "A large group of tourists are visiting an ancient temple, which is carved into a large cliff face. The temple is made of stone and has many columns. The tourists are walking around the temple, taking pictures, and looking at the ancient carvings.",
        "Dominant_Colors": ["brown", "blue", "white", "orange"],
        "Contextual_Analysis": "The image depicts a group of tourists visiting an ancient temple in a desert setting. The time of day is likely afternoon or early evening, as the sun is casting long shadows. The mood conveyed is one of wonder and excitement.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 81754,
    "campaignName": "Find your kind of Perfect",
    "creativegraphic": "https://images.pexels.com/photos/3670580/pexels-photo-3670580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Find Your Perfect",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Moment",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "cream",
    "Body_Text": "Escape the ordinary and discover your own perfect moment. From cozy cafes to luxurious retreats, our hospitality options cater to every desire. Indulge in delectable treats, enjoy personalized service, and create memories that last a lifetime.",
    "Analysis": [
      {
        "Content_Description": "A table with a tray holding two pastries, a cup of coffee, and a teapot. The pastries are both topped with white sugar crystals. The coffee is in a white mug with a handle. The teapot is made of metal and has a spout. The tray is made of wood and has a white background.",
        "Dominant_Colors": ["brown", "white", "cream", "gold"],
        "Contextual_Analysis": "The image depicts a breakfast or brunch setting, likely at a cafe or restaurant. The warm colors and the sweet treats suggest a cozy and enjoyable atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 96034,
    "campaignName": "Find your kind of Perfect",
    "creativegraphic": "https://images.pexels.com/photos/4021887/pexels-photo-4021887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial",
    "Heading_Color": "Yellow",
    "Heading_Text": "Find Your Perfect Sip",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "Light Blue",
    "Sub_Heading_Text": "Refreshing. Relaxing. Rejuvenating.",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "White",
    "Body_Text": "Escape the ordinary and discover your perfect summer escape. Whether you crave a classic lemonade with a twist or a vibrant, tropical cocktail, our selection of handcrafted beverages promises to quench your thirst and elevate your experience.Join us and find your kind of perfect.",
    "Analysis": [
      {
        "Content_Description": "A glass of lemonade with lemon slices and mint leaves. A whole lemon wedge is also present on the right side of the image.",
        "Dominant_Colors": ["light blue", "white", "yellow", "green"],
        "Contextual_Analysis": "The image depicts a refreshing summer drink, possibly on a table or countertop. The light blue background suggests a casual setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 81144,
    "campaignName": "Find your kind of Perfect",
    "creativegraphic": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Find Your Perfect",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Start Your Day with Sweet Perfection",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "red",
    "Body_Text": "Indulge in a stack of fluffy pancakes, drizzled with rich caramel sauce, adorned with fresh strawberries and crunchy walnuts. Each bite is a symphony of flavors, designed to make your morning bright and your day delicious. ",
    "Analysis": [
      {
        "Content_Description": "A plate of pancakes topped with caramel sauce, strawberries, and walnuts. There is also a small bowl of whipped cream to the right of the plate.",
        "Dominant_Colors": ["brown", "white", "red"],
        "Contextual_Analysis": "The image is likely taken in a restaurant or cafe setting. The lighting is bright and the mood is inviting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 19444,
    "campaignName": "Find your kind of Perfect",
    "creativegraphic": "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Find Your Perfect",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "yellow",
    "Sub_Heading_Text": "Discover the idyllic charm of a coastal town nestled amidst breathtaking beauty.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape to a tranquil haven where vibrant colors meet azure waters. ",
    "Analysis": [
      {
        "Content_Description": "A picturesque coastal town nestled on a rocky cliff overlooking the azure waters of the Mediterranean Sea. The town is characterized by its colorful buildings, winding streets, and a charming tower. In the foreground, vibrant yellow flowers bloom, adding a touch of warmth to the scene.",
        "Dominant_Colors": ["blue", "green", "yellow", "brown", "white"],
        "Contextual_Analysis": "The image captures a serene and idyllic setting, likely in a coastal region during a sunny day. The vibrant colors and clear skies evoke a sense of tranquility and beauty.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 50614,
    "campaignName": "Find your kind of Perfect",
    "creativegraphic": "https://images.pexels.com/photos/3697742/pexels-photo-3697742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "serif",
    "Heading_Color": "gold",
    "Heading_Text": "Find Your Kind of Perfect",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "sans-serif",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Where Luxury Meets Your Every Desire",
    "Body_Size": "p",
    "Body_Font": "serif",
    "Body_Color": "white",
    "Body_Text": "Step into a world of unparalleled elegance and discover your perfect escape. Our meticulously curated experiences cater to your every whim, offering a symphony of luxury, personalized service, and breathtaking beauty.Indulge in exquisite cuisine, immerse yourself in captivating art, and unwind in opulent surroundings.Unveil your ideal haven, where every detail is meticulously crafted to create unforgettable moments.",
    "Analysis": [
      {
        "Content_Description": "The image shows a grand staircase in a palace, featuring intricate carvings, ornate decorations, and large windows. The staircase is made of white marble with gold accents, and the walls are adorned with elaborate stucco work and paintings. There are several statues and sculptures along the walls, and the windows offer glimpses of the outside world.",
        "Dominant_Colors": ["white", "gold", "beige"],
        "Contextual_Analysis": "The image evokes a sense of opulence and grandeur, suggesting a historical setting like a royal palace or a museum. The light filtering through the windows creates a dramatic atmosphere, highlighting the intricate details of the architecture.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 41354,
    "campaignName": "Work Anywhere. Recharge Everywhere",
    "creativegraphic": "https://images.pexels.com/photos/19883382/pexels-photo-19883382/free-photo-of-view-of-a-room-in-oread-cave-suites-urgup-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Work Anywhere",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Escape the Ordinary",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "red",
    "Body_Text": "Discover a haven of comfort and luxury where productivity meets relaxation. ",
    "Analysis": [
      {
        "Content_Description": "The image shows a luxurious bedroom with a large bed, a spiral staircase, and a fireplace. The bed is made with white sheets and a red comforter with a floral pattern. The headboard is made of stone and has a large ornate mirror above it. The spiral staircase is made of wood and leads up to a second level. The fireplace is made of stone and has a fire burning inside. The room is decorated in a traditional style with stone walls and wooden furniture.",
        "Dominant_Colors": ["brown", "white", "red", "yellow"],
        "Contextual_Analysis": "The image depicts a luxurious bedroom in a hotel or a private residence. The warm lighting, the ornate furniture, and the fireplace create a cozy and inviting atmosphere. The presence of the spiral staircase suggests that the room is part of a larger building.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 74424,
    "campaignName": "Work Anywhere. Recharge Everywhere",
    "creativegraphic": "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Work Anywhere.",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Find Your Perfect Workspace.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Escape the ordinary and discover a world of possibilities. Our comfortable and inspiring spaces provide the perfect backdrop for your next work adventure. Whether you're seeking a quiet corner to focus or a vibrant hub for collaboration, we have the ideal setting for you to thrive. Unwind and recharge in our cozy outdoor patios, bathed in the warm glow of string lights. Immerse yourself in the ambiance and let your creativity flow. Work anywhere, recharge everywhere.",
    "Analysis": [
      {
        "Content_Description": "An outdoor patio at night decorated with string lights, a white umbrella, a wooden table and chairs, and two large, brown poufs. The patio is lit by string lights and lanterns. There are plants and a small tree in the background. The scene is cozy and inviting. ",
        "Dominant_Colors": ["brown", "white", "black", "yellow"],
        "Contextual_Analysis": "setting, outdoor patio, time of day, night, mood, cozy and inviting",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 39004,
    "campaignName": "Work Anywhere. Recharge Everywhere",
    "creativegraphic": "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Work Anywhere.",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Find Your Perfect Work-Life Balance.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine waking up to breathtaking views, sipping your morning coffee in a cozy living room, and diving into your work with a clear mind.Our hotels offer the perfect blend of comfort and productivity, allowing you to seamlessly transition between work and relaxation.Enjoy spacious accommodations, high-speed Wi-Fi, and dedicated workspaces – all designed to enhance your productivity and well-being.",
    "Analysis": [
      {
        "Content_Description": "A living room with a brown leather couch, two windows with white curtains, a floor lamp, a woven basket, a small gold side table, and a rug. The couch has two light blue pillows and a white pillow. The floor lamp is made of wood and has a white shade. The basket is filled with a white blanket. The side table is made of gold metal and has a round top. The rug is white and fluffy.",
        "Dominant_Colors": ["white", "brown", "beige", "blue"],
        "Contextual_Analysis": "The image depicts a living room that is decorated in a minimalist style. The room is bright and airy, and the furniture is comfortable and inviting. The setting is indoors, and the time of day is likely daytime.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 30414,
    "campaignName": "Work Anywhere. Recharge Everywhere",
    "creativegraphic": "https://images.pexels.com/photos/3771833/pexels-photo-3771833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "black",
    "Heading_Text": "Work Anywhere",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Find Your Perfect Workspace",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "Escape the confines of the traditional office and discover a world of possibilities with our Work Anywhere, Recharge Everywhere campaign. ",
    "Analysis": [
      {
        "Content_Description": "A young woman with long blonde hair is sitting at a table in a cafe. She is looking down at her phone and smiling. The cafe is decorated in a traditional style with dark wood furniture and floral patterns. There are other people sitting at tables in the background.",
        "Dominant_Colors": ["white", "brown", "beige", "yellow", "black"],
        "Contextual_Analysis": "The image is set in a cafe, likely in the afternoon or evening. The warm lighting and the womans relaxed posture suggest a casual and comfortable atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 68764,
    "campaignName": "Work Anywhere. Recharge Everywhere",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1661923086373-73176f7c004a?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Work Anywhere.",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "tan",
    "Sub_Heading_Text": "Find your perfect escape.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Escape the hustle and bustle of everyday life and discover a new way to work. Our serene and comfortable accommodations offer the perfect blend of productivity and relaxation. Enjoy stunning views, spacious work areas, and a range of amenities designed to inspire and refresh. Work smarter, not harder, and find your ideal work-life balance.",
    "Analysis": [
      {
        "Content_Description": "The image shows a bedroom with a large bed, a canopy, two wicker chairs, and a wooden table. The bed has white sheets and pillows, and the canopy is made of white fabric. The chairs are both round and have brown wicker frames. The table is rectangular and has a wooden top. The walls are made of bamboo and the floor is made of wood. There is a window in the background that shows a snowy mountain scene. The room is decorated in a rustic style.",
        "Dominant_Colors": ["brown", "white", "tan"],
        "Contextual_Analysis": "The image depicts a cozy and comfortable bedroom in a rustic setting. The warm colors and natural materials create a sense of peace and tranquility.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 54784,
    "campaignName": "Book Now & Save: Early Bird Specials",
    "creativegraphic": "https://images.pexels.com/photos/5029310/pexels-photo-5029310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Book Now & Save",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "green",
    "Sub_Heading_Text": "Early Bird Specials",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Escape to paradise and enjoy exclusive savings with our Early Bird Specials. Book your stay now and experience the serenity of our luxurious courtyard with a sparkling pool, lush greenery, and comfortable seating areas.Don't miss out on this limited-time offer!",
    "Analysis": [
      {
        "Content_Description": "A courtyard with a swimming pool in the center. There are trees and plants on either side of the pool, as well as white walls with arched doorways. There are also some chairs and tables around the pool.",
        "Dominant_Colors": ["white", "blue", "green", "brown"],
        "Contextual_Analysis": "The image depicts a serene and tranquil outdoor space, likely a courtyard or garden. The setting is outdoors, and the time of day is likely daytime. The mood conveyed is calm and peaceful.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 52704,
    "campaignName": "Book Now & Save: Early Bird Specials",
    "creativegraphic": "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Book Now & Save",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "gray",
    "Sub_Heading_Text": "Early Bird Specials for Your Dream Getaway",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Indulge in a luxurious escape with our exclusive early bird specials. ",
    "Analysis": [
      {
        "Content_Description": "A woman in a white robe sits on a bed in a hotel room, looking at her phone. There is a laptop on the bed in front of her, and a tray of food and drinks on the table next to her. The view from the window shows a city skyline with a tall building in the distance.",
        "Dominant_Colors": ["white", "gray", "blue"],
        "Contextual_Analysis": "The image depicts a woman enjoying a relaxing morning in a hotel room with a city view. The setting is indoors, and the time of day is likely morning or early afternoon. The mood conveyed is one of tranquility and comfort.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 72634,
    "campaignName": "Book Now & Save: Early Bird Specials",
    "creativegraphic": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Book Now & Save:",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "orange",
    "Sub_Heading_Text": "Indulge in a Flavorful Journey",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Savor the vibrant aromas and authentic flavors of our Indian cuisine. Our Early Bird Specials offer you an incredible opportunity to experience a delectable dining experience at a discounted price.Don't miss out on this chance to treat yourself to a memorable culinary adventure.",
    "Analysis": [
      {
        "Content_Description": "A table spread with Indian food. There are four bowls of curry, one with a spoon in it. There is also a basket of naan bread and a plate of fried onion pakoras. There is a small bowl of green sauce and salad on the side.",
        "Dominant_Colors": ["brown", "white", "green", "red", "orange"],
        "Contextual_Analysis": "The image depicts a setting of an Indian restaurant or a home kitchen, suggesting a meal or a celebration.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 65474,
    "campaignName": "Book Now & Save: Early Bird Specials",
    "creativegraphic": "https://images.pexels.com/photos/6587906/pexels-photo-6587906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "brown",
    "Heading_Text": "Book Now & Save:",
    "Sub_Heading_Size": "H3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "beige",
    "Sub_Heading_Text": "Indulge in Luxury & Save Big",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the ultimate in comfort and style with our exclusive Early Bird Specials. ",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a large bed in the center of the room. The bed has a white comforter with a diamond pattern. There is a large window on the right side of the room with brown curtains. There is a couch to the left of the bed. The room is decorated in a modern style.",
        "Dominant_Colors": ["white", "brown", "beige", "gold"],
        "Contextual_Analysis": "The image depicts a luxurious bedroom. The modern design elements, such as the geometric patterns and the sleek furniture, create a sophisticated and elegant atmosphere. The natural light streaming through the windows suggests a daytime setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 73184,
    "campaignName": "Flexible Booking: Worry-Free Travel",
    "creativegraphic": "https://images.pexels.com/photos/3182841/pexels-photo-3182841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "brown",
    "Heading_Text": "Flexible Booking",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Escape to Tranquility",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the ultimate freedom with our flexible booking policy.",
    "Analysis": [
      {
        "Content_Description": "A person is lying in bed, reading a book. The bed is white and the room is wooden. The person is wearing a red and black plaid shirt. There is a window behind the person, showing a view of trees outside. A lantern is on the wall behind the person.",
        "Dominant_Colors": ["brown", "white"],
        "Contextual_Analysis": "The image depicts a cozy and relaxing scene. The person is enjoying a quiet moment of reading in bed. The warm lighting and wooden walls create a sense of comfort and tranquility. The view of the trees outside suggests a peaceful and natural setting.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 67364,
    "campaignName": "Flexible Booking: Worry-Free Travel",
    "creativegraphic": "https://images.pexels.com/photos/1524232/pexels-photo-1524232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "gray",
    "Heading_Text": "Flexible Booking:",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Escape to Relaxation, No Strings Attached.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Embrace the freedom of flexible booking. Our worry-free travel options let you unwind with peace of mind, knowing you can adapt your plans with ease. Explore our diverse accommodations, where comfort and convenience meet to create your perfect getaway. Book with confidence, knowing you have the flexibility to adjust your itinerary to suit your changing needs.",
    "Analysis": [
      {
        "Content_Description": "A woman is lying in bed, her face hidden behind a book. She is wearing a white shirt with a floral pattern. The bed has a gray headboard and is covered in gray and white bedding. The room is lit by natural light coming in from a window. ",
        "Dominant_Colors": ["gray", "white", "brown", "green"],
        "Contextual_Analysis": "The image depicts a woman relaxing in bed, possibly reading or taking a break. The setting is a bedroom, and the time of day is likely morning or afternoon. The overall mood is calm and peaceful.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 58844,
    "campaignName": "Flexible Booking: Worry-Free Travel",
    "creativegraphic": "https://images.pexels.com/photos/5806989/pexels-photo-5806989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "gold",
    "Heading_Text": "Flexible Booking:",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Embrace spontaneity, book with confidence.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Experience the ultimate travel freedom with our flexible booking options.No more stress about changing plans.Enjoy peace of mind knowing you can modify or cancel your reservations with ease.Unwind in luxurious accommodations designed for relaxation and comfort, knowing you have the flexibility to adjust your travel plans as needed.",
    "Analysis": [
      {
        "Content_Description": "The image shows a living room interior with a white fireplace, a large mirror, a gold chandelier, a white couch, a wicker chair, a mirrored coffee table, and an abstract painting on an easel. The room is decorated in a minimalist style with a focus on clean lines and light colors.",
        "Dominant_Colors": ["white", "gold", "brown"],
        "Contextual_Analysis": "The image depicts a living room in a modern home. The room is well-lit and airy, suggesting a comfortable and inviting atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 34134,
    "campaignName": "Flexible Booking: Worry-Free Travel",
    "creativegraphic": "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "green",
    "Heading_Text": "Flexible Booking:",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Escape to Paradise with Unparalleled Flexibility",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "brown",
    "Body_Text": "Discover the freedom to plan your dream vacation without the stress of rigid schedules. With our flexible booking options, you can adjust your travel dates, change accommodations, or even cancel with ease. Enjoy peace of mind knowing that your trip is tailored to your evolving needs. Dive into the crystal-clear waters of our tropical paradise, where lush greenery and thatched-roof huts create a serene sanctuary. Let us take care of the details, while you focus on creating lasting memories.",
    "Analysis": [
      {
        "Content_Description": "A woman in a red swimsuit is floating on her back in a curved swimming pool. The pool is surrounded by lush greenery and two thatched roof huts. The scene is relaxing and tropical.",
        "Dominant_Colors": ["green", "blue", "brown"],
        "Contextual_Analysis": "Setting, outdoors, Time of Day, day, Mood, relaxing",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 55564,
    "campaignName": "Flexible Booking: Worry-Free Travel",
    "creativegraphic": "https://images.pexels.com/photos/1841149/pexels-photo-1841149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "gray",
    "Heading_Text": "Flexible Booking:",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Experience the Ultimate Flexibility",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Embrace the freedom to adjust your travel plans without stress. Our flexible booking policy empowers you to modify or cancel your reservations with ease, ensuring peace of mind and worry-free travel. Whether it's a sudden change in plans or a desire for greater flexibility, we've got you covered. Book with confidence, knowing that your vacation is in your hands.",
    "Analysis": [
      {
        "Content_Description": "A bed with white sheets and pillows is situated next to a window with white curtains. The window offers a view of a cityscape with buildings and balconies. The bed is unmade with the sheets and pillows in disarray.",
        "Dominant_Colors": ["white", "gray"],
        "Contextual_Analysis": "The image depicts a bedroom with a bed next to a window. The setting is indoors, and the time of day is unclear. The mood is calm and peaceful.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 79784,
    "campaignName": "Social Media Contests: Win a Dream Getaway",
    "creativegraphic": "https://plus.unsplash.com/premium_photo-1661962493427-910e3333cf5a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Heading_Size": "48px",
    "Heading_Font": "Arial Black",
    "Heading_Color": "Brown",
    "Heading_Text": "Escape to Luxury",
    "Sub_Heading_Size": "24px",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "White",
    "Sub_Heading_Text": "Win a Dream Getaway",
    "Body_Size": "16px",
    "Body_Font": "Arial",
    "Body_Color": "Gray",
    "Body_Text": "Indulge in a relaxing retreat. Enter our contest for a chance to win a luxurious stay in a stunning bedroom like this. Follow our page, like this post, and tag a friend to enter. Winner announced [Date].",
    "Analysis": [
      {
        "Content_Description": "A bedroom with a large bed, a nightstand, a lamp, and a framed picture on the wall. The walls are a dark wood color and the bed has a brown comforter. The room is lit by a ceiling light and a lamp on the nightstand.",
        "Dominant_Colors": ["brown", "white", "gray", "blue"],
        "Contextual_Analysis": "The image depicts a modern bedroom, likely in a hotel or a high-end apartment. The lighting suggests it is evening, and the overall mood is calm and relaxing.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 83634,
    "campaignName": "Social Media Contests: Win a Dream Getaway",
    "creativegraphic": "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "orange",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Win a Dream Getaway",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "pink",
    "Body_Text": "Imagine waking up to breathtaking ocean views, sipping cocktails by the pool, and exploring a tropical paradise. This is your chance to win the ultimate getaway! Enter our social media contest for a chance to experience luxury and relaxation in a stunning destination.",
    "Analysis": [
      {
        "Content_Description": "A woman in a green swimsuit is standing on a wooden railing of a deck overlooking a turquoise ocean. The sky is a beautiful blend of orange and pink hues, suggesting a sunset. A thatched-roof bungalow is visible behind the woman, and a swimming pool is in the foreground, seamlessly blending with the ocean.",
        "Dominant_Colors": ["blue", "orange", "pink", "green"],
        "Contextual_Analysis": "The image depicts a tranquil and luxurious setting, possibly in a tropical resort or a private villa. The warm colors of the sunset and the calm ocean create a serene and relaxing atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 37474,
    "campaignName": "Social Media Contests: Win a Dream Getaway",
    "creativegraphic": "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "H1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "H2",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "brown",
    "Sub_Heading_Text": "Indulge in a Tropical Retreat",
    "Body_Size": "Body",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Enter our exclusive social media contest for a chance to win a luxurious getaway to a serene tropical paradise. Imagine yourself dining under the stars at a charming thatched-roof restaurant, lulled by the gentle sounds of the ocean. This dream escape includes a cozy stay in a picturesque beachfront villa, delicious meals, and unforgettable experiences.",
    "Analysis": [
      {
        "Content_Description": "A wooden pier extends out into a calm, turquoise sea towards a thatched-roof hut restaurant. The hut is lit up with string lights, and there are people dining inside. The sky is a soft blue, and the scene is peaceful and serene.",
        "Dominant_Colors": ["blue", "brown", "white", "yellow"],
        "Contextual_Analysis": "The image depicts a serene and tranquil scene at a tropical resort or beachside restaurant. The soft lighting, calm waters, and thatched-roof hut suggest a relaxing and romantic atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 78424,
    "campaignName": "Social Media Contests: Win a Dream Getaway",
    "creativegraphic": "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial",
    "Heading_Color": "blue",
    "Heading_Text": "Escape to Paradise: Win Your Dream Getaway",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Enter for a Chance to Win an Unforgettable Vacation",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "white",
    "Body_Text": "Imagine pristine beaches, crystal-clear waters, and luxurious accommodations.",
    "Analysis": [
      {
        "Content_Description": "A couple is walking away from the camera on a wooden pier towards a resort. The man is wearing a white t-shirt and white shorts, and the woman is wearing a white t-shirt and white shorts. They are both pulling suitcases behind them. The resort is in the background, and the water is blue.",
        "Dominant_Colors": ["blue", "white"],
        "Contextual_Analysis": "Setting, outdoors, Time of Day, day, Mood, happy",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 68824,
    "campaignName": "Social Media Contests: Win a Dream Getaway",
    "creativegraphic": "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "white",
    "Heading_Text": "Escape to Paradise",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "blue",
    "Sub_Heading_Text": "Enter our Social Media Contest and you could be relaxing by this pool.",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "green",
    "Body_Text": "Imagine yourself waking up to the sound of crashing waves, sipping cocktails by the pool, and exploring breathtaking scenery.This could be your reality!Enter our social media contest for a chance to win a luxurious vacation at [Resort name].To enter, simply [Describe contest entry details (e.g., follow us on Instagram, like our post, tag a friend)].The contest ends on [Date].Don't miss your chance to win the trip of a lifetime!",
    "Analysis": [
      {
        "Content_Description": "A white building with balconies and palm trees in front of it. There is a swimming pool in the foreground.",
        "Dominant_Colors": ["white", "blue", "green", "brown"],
        "Contextual_Analysis": "The image is of a resort or hotel, likely in a tropical or Mediterranean climate. The scene is relaxing and inviting, suggesting a vacation destination.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  }, 
  {
    "creativeID": 1111,
    "campaignName": "Celebrating the Wanderer",
    "creativegraphic": "https://366e203a.rocketcdn.me/wp-content/uploads/2024/04/Travel-Tourism-Hospitality.jpg",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Celebrating the Wanderer",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "A Journey of Freedom and Joy",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "A woman in a red dress and a straw hat is standing on a white stone pathway overlooking a town with blue domed churches. The woman is facing away from the camera, her arms outstretched as if she is enjoying the view. The town is built on the side of a cliff, and the sea is visible in the distance. The sky is blue and sunny, evoking a feeling of joy and freedom, likely capturing a moment of vacation bliss.",
    "Analysis": [
      {
        "Content_Description": "A woman in a red dress and a straw hat is standing on a white stone pathway overlooking a town with blue domed churches. The woman is facing away from the camera, her arms are outstretched as if she is enjoying the view. The town is built on the side of a cliff, and the sea is visible in the distance. The sky is blue and sunny.",
        "Dominant_Colors": ["blue", "white", "red"],
        "Contextual_Analysis": "The image evokes a feeling of joy and freedom. It is likely that the woman is on vacation and enjoying the beautiful scenery. The bright colors and sunny weather create a happy and carefree mood.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 1112,
    "campaignName": "Celebrating the Wanderer",
    "creativegraphic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_B4Rjk_datHsZ4WMcNdSP_6pft6sz0qIuLpo1GP6NJ-tnvI_7iwEyu8-EsgGGK4N2_4&usqp=CAU",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Celebrating the Wanderer",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "A Slice of Peace and Luxury",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "This luxurious outdoor patio offers a perfect view of the ocean and lush green hillside. Surrounded by a modern, minimalist house, it's designed for relaxation, with comfortable seating and clear skies. A serene setting, ideal for enjoying the midday sun and the peaceful atmosphere of this tropical paradise.",
    "Analysis": [
      {
        "Content_Description": "A luxurious outdoor patio with a wooden deck, lounge chairs, a coffee table, and a view of the ocean and a lush green hillside. The patio is furnished with comfortable seating and a large, clear glass dome is on the coffee table. The patio is surrounded by a modern, minimalist house.",
        "Dominant_Colors": ["blue", "brown", "green", "white"],
        "Contextual_Analysis": "The image conveys a sense of peace and tranquility, with a luxurious setting perfect for relaxation and enjoying the beautiful scenery. The time of day appears to be midday, with bright sunlight and clear skies. The setting is an outdoor patio, likely overlooking a tropical island or coastal area.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 1113,
    "campaignName": "Unleashing the Explorer",
    "creativegraphic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_B4Rjk_datHsZ4WMcNdSP_6pft6sz0qIuLpo1GP6NJ-tnvI_7iwEyu8-EsgGGK4N2_4&usqp=CAU",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Unleashing the Explorer",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Embrace the Adventure",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "A couple walks hand-in-hand down a wooden dock towards a tropical resort. They carry luggage, dressed in casual summer attire, with the ocean stretching out beneath them. The serene blue waters and the surrounding tropical bungalows suggest a perfect vacation getaway.",
    "Analysis": [
      {
        "Content_Description": "A couple is walking on a wooden dock towards a resort in a tropical location. They are both carrying luggage and are dressed in casual summer clothes. The dock is over a crystal clear blue ocean. There are several small bungalows on stilts in the background, and a boat is docked nearby.",
        "Dominant_Colors": ["blue", "white", "brown"],
        "Contextual_Analysis": "The image depicts a vacation or honeymoon setting. The couple's attire, the tropical location, and the luxurious accommodations suggest a relaxing and enjoyable experience.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  },
  {
    "creativeID": 1114,
    "campaignName": "Unleashing the Explorer",
    "creativegraphic": "https://etimg.etb2bimg.com/thumb/img-size-136338/95660448.cms?width=150&height=112",
    "Heading_Size": "h1",
    "Heading_Font": "Arial Black",
    "Heading_Color": "blue",
    "Heading_Text": "Unleashing the Explorer",
    "Sub_Heading_Size": "h3",
    "Sub_Heading_Font": "Arial",
    "Sub_Heading_Color": "white",
    "Sub_Heading_Text": "Relaxation Awaits",
    "Body_Size": "p",
    "Body_Font": "Arial",
    "Body_Color": "black",
    "Body_Text": "A pristine swimming pool surrounded by tropical greenery and wooden lounge chairs. The clear blue water invites relaxation, while the lush palm trees offer the perfect tropical setting. A perfect resort escape for sunbathing, swimming, or simply soaking in the peaceful surroundings.",
    "Analysis": [
      {
        "Content_Description": "The image shows a swimming pool surrounded by lounge chairs and lush greenery. The pool is rectangular and filled with clear blue water. There are steps leading into the pool and a metal handrail. The lounge chairs are made of wood and have white cushions. The greenery is a mix of palm trees and other tropical plants. The sky is blue and sunny.",
        "Dominant_Colors": ["blue", "green", "brown", "white"],
        "Contextual_Analysis": "The image depicts a relaxing outdoor space at a resort or hotel. The pool and lounge chairs suggest a place for swimming and sunbathing. The lush greenery and sunny sky contribute to a peaceful and tropical atmosphere.",
        "Text_Recognition": [
          ""
        ]
      }
    ]
  }
]

export default newCampaignsData;

