export const data ={
    basic_command:[
        {
            "tag":"greeting",
            "pattern":"(hi|hello|hey|howdy|good morning|good afternoon|good evening|good night|good day|good evening|good afternoon|good morning)",
            "reply":[
                "Hello! How can I assist you today?",
                "Hey there, how can I help?",
                "Hi! What can I do for you?"
            ]
        },{
            "tag": "goodbye",
        "pattern": "(bye|goodbye|see you later|see ya|cya|talk to you later|ttyl|till later|till then|till next time)",
        "reply": [
            "See you!",
                "Have a nice day",
                "Bye! Come back again soon."
        ]
        },
        {
            "tag": "thanks",
            "pattern": "(thanks|thank you|thank you so much|thanks a lot|thanks for that|thanks for your help|thannks for your time|thanks for your time)",
            "reply": [
              "You're welcome!",
              "No problem!",
              "Happy to help!",
              "Any time!",
              "My pleasure"
            ]
        },
        {
            "tag": "jokes",
                "pattern": "(tell me a joke|joke|jokes|i'm bored|make me laugh|can you tell me a joke)",
                "reply": [
                    "A perfectionist walked into a bar...apparently, the bar wasn't set high enough",
                    "I ate a clock yesterday, it was very time-consuming",
                    "Never criticize someone until you've walked a mile in their shoes. That way, when you criticize them, they won't be able to hear you from that far away. Plus, you'll have their shoes.",
                    "The world tongue-twister champion just got arrested. I hear they're gonna give him a really tough sentence.",
                    "I own the world's worst thesaurus. Not only is it awful, it's awful.",
                    "What did the traffic light say to the car? \"Don't look now, I'm changing.\"",
                    "What do you call a snowman with a suntan? A puddle.",
                    "How does a penguin build a house? Igloos it together",
                    "I went to see the doctor about my short-term memory problems – the first thing he did was make me pay in advance",
                    "As I get older and I remember all the people I’ve lost along the way, I think to myself, maybe a career as a tour guide wasn’t for me.",
                    "o what if I don't know what 'Armageddon' means? It's not the end of the world."
                ],
        },
        {
             "tag": "Identity",
                "pattern": "(who are you|what is your name|who is this)",
                "reply": [
                    "I am Echo, a web based chatbot"
                ]
        },
        {
            "tag": "whatsup",
            "pattern": "(whats up|wazzup|how are you|sup|How you doing)"
            ,
            "reply": [
                "All good..What about you?"
            ]
        },
        {
            "tag": "programmer",
            "pattern": "(who made you|who programmed you|who created you|who designed you|who code you|who developed you|who programmed you)",
            "reply": [
                "I was made by Mohamed Tawfeeq."
            ]
        },
        {
            "tag": "noanswer",
            "patterns": [],
            "reply": [
                "Sorry, can't understand you",
                "Please give me more info",
                "Not sure I understand"
            ]}
    ]
    ,
    state_capital:{
        tag:"capital",
        commands:{
            "andhra pradesh": "Amaravati",
            "arunachal pradesh": "Itanagar",
            "assam": "Dispur",
            "bihar": "Patna",
            "chhattisgarh": "Raipur",
            "goa": "Panaji",
            "gujarat": "Gandhinagar",
            "haryana": "Chandigarh",
            "himachal Pradesh": "Shimla",
            "jharkhand": "Ranchi",
            "karnataka": "Bengaluru",
            "kerala": "Thiruvananthapuram",
            "madhya Pradesh": "Bhopal",
            "maharashtra": "Mumbai",
            "manipur": "Imphal",
            "meghalaya": "Shillong",
            "mizoram": "Aizawl",
            "nagaland": "Kohima",
            "odisha": "Bhubaneswar",
             "punjab": "Chandigarh",
            "rajasthan": "Jaipur",
            "sikkim": "Gangtok",
            "tamil nadu": "Chennai",
             "telangana": "Hyderabad",
                "tripura": "Agartala",
                "uttar pradesh": "Lucknow",
            "uttarakhand": "Dehradun",
            "west bengal": "Kolkata"
        }
    }
}
  
export default data;