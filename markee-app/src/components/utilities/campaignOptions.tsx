export interface MultiDropdownOption {
  value:any;
  label: string;
}

export interface DropdownOptions {
  Type: {
    options: MultiDropdownOption[];
  };
  Languages: {
    options: MultiDropdownOption[];
  };
  Status: {
    options: MultiDropdownOption[];
  };
  Products: {
    options: MultiDropdownOption[];
  };
  Channel: {
    options: MultiDropdownOption[];
  };
  Geography: {
    options: MultiDropdownOption[];
  };
}
const dropdownOptions: DropdownOptions = {
  "Type": {
    "options": [
      { value:1, label: 'Awareness' },
      { value:2, label: 'Consideration' },
      { value:3, label: 'Conversion' },
      { value:4, label: 'Engagement' },
      { value:5, label: 'Loyalty' }
  ]
  },
  "Languages": {
    "options": [
      { value: 'en', label: 'English' },
      { value: 'de', label: 'German' },
      { value: 'ru', label: 'Russian' },
      { value: 'fr', label: 'French' }
  ]
  },
  "Status": {
    "options": [
      { value: 1, label: 'Live Campaign' },
      { value: 2, label: 'Pending Launch' },
      { value: 3, label: 'Completed' },
      { value: 4, label: 'In Development' }
  ]
  },
  "Products": {
    "options": [
      
        { value: 1, label: 'Accommodation' },
        { value: 2, label: 'Beach Property' },
        { value: 3, label: 'Entertainment and Recreation' },
        { value: 4, label: 'Food and Beverage' },
        { value: 5, label: 'Heritage Property' },
        { value: 6, label: 'Resorts' },
        { value: 7, label: 'Restro-bars' },
        { value: 8, label: 'Room Upgrades' },
        { value: 9, label: 'Suites' },
        { value: 10, label: 'Travel and Tourism' }
            
  ]
  },
  "Channel": {
    "options": [
      { value: 1, label: 'Email' },
      { value: 2, label: 'Facebook' },
      { value: 3, label: 'Youtube' },
      { value: 4, label: 'Snapchat' },
      { value: 5, label: 'App Notification' }
  ]
  },
  "Geography": {
    "options":  [
      { value: 'en-ca', label: 'Canada' },
      { value: 'it-it', label: 'Italy' },
      { value: 'en-us', label: 'United States' },
      { value: 'es-mx', label: 'Mexico' },
      { value: 'de-de', label: 'Germany' },
      { value: 'ru-ru', label: 'Russia' },
      { value: 'ar-eg', label: 'Egypt' },
      { value: 'fr-fr', label: 'France' },
      { value: 'hi-in', label: 'India' },
      { value: 'en-gb', label: 'UK' },
      { value: 'ja-jp', label: 'Japan' }
  ]
  },
}
export default dropdownOptions
