const profileImages = [
    "swipingImages/girlWithDog.png",
    "swipingImages/woman 2.jpg",
    "swipingImages/woman 3.jpg",
    "swipingImages/woman 4.jpg",
    "swipingImages/woman 5.jpg"
    ];

const profileDogImages = [
  "swipingImages/dogGirl.jpg",
  "swipingImages/dogGirl 2.jpg",
  "swipingImages/dogGirl 3.jpg",
  "swipingImages/dogGirl 4.jpg",
  "swipingImages/dogGirl 5.jpg",
]
const names = [
    "Cassandra Black",
    "Blair Travalta",
    "Lessie Smith",
    "Leo Leo",
    "Katie Carebare"
  ];

  const distances = [
    "10km away from you",
    "5km away from you",
    "500m away from you",
    "2km away from you",
    "5km away from you",
  ];

  const descriptions = [
    "Adventurer at heart, always seeking the next thrill, whether it’s hiking up mountains, discovering hidden gems around the city!",
    
    "Dog lover who believes life is better with furry friends. My ideal day includes a long walk with my pup or maybe a stop by a pet-friendly café.",
    
    "Coffee enthusiast, never seen without a latte in hand. Whether it’s a slow morning with a good book at a cozy café.",
    
    "Traveler who’s always planning the next escape, from weekend getaways to far-off destinations. Looking for my next travel buddy!",
    
    "Bookworm who enjoys cozy nights in with a good novel, escaping into different worlds and exploring new ideas."
  ];

  const switchingText = [
    "You are currently looking for human dates.\n \nLooking for pet date? Click to switch!",
    "You are currently looking for pet dates.\n \nLooking for human date? Click to switch!",
  ];


  var sIndex = 0
  var dIndex = 0

  const selfie = document.getElementById("selfie")
  const name = document.getElementById("userName")
  const distance = document.getElementById("distance")
  const description = document.getElementById("description")
  selfie.src = profileImages[sIndex]
  name.innerHTML = names[sIndex]
  distance.innerHTML = distances[sIndex]
  description.innerHTML = descriptions[sIndex]

  var switchingPanelIndex = 0
  
  const switchingPanelText = document.getElementById("switchingPanelText")
  switchingPanelText.innerHTML = switchingText[switchingPanelIndex]

  
  // Function to update the text by cycling through the array
  function cycleText() {
    if(switchingPanelIndex %2== 0){
      sIndex ++
      selfie.src = profileImages[sIndex%5]
      name.innerHTML = names[sIndex%5]
      distance.innerHTML = distances[sIndex%5]
      description.innerHTML = descriptions[sIndex%5]
    }else{
      sIndex ++
      selfie.src = profileDogImages[sIndex%5]
      name.innerHTML = names[sIndex%5]
      distance.innerHTML = distances[sIndex%5]
      description.innerHTML = descriptions[sIndex%5]
    }
  };

  function cycleDating(){
    switchingPanelIndex ++
    switchingPanelText.innerHTML = switchingText[switchingPanelIndex%2]
    sIndex ++
    cycleText()
  }