
global.stripTags = (html) => {
  const regex = /(<([^>]+)>)/ig

  return html ? 
    html.replace(regex, "") :
    '';
}

global.getPosted = (type, dateString = '') => {
  const dateParts = dateString.split('/');
  const articleDate = new Date(dateParts[1] + '-' + dateParts[0] + '-' + dateParts[2].substr(0, 4));
  const daysArray = [
    "Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday", "Sunday"
  ];

  switch (type) {
    case 'date': {
      const date = Number(articleDate.getDate());
      return date >= 10 ? date :  '0' + date;
    }
    case 'day':
      return daysArray[articleDate.getDay()];
    case 'month':
      return articleDate.toLocaleString("en-us", { month: "long" });
    case 'month-year':
      return articleDate.toLocaleString("en-us", { month: "long" }) 
        + ', ' 
        + articleDate.getFullYear();
  }
  return false;
}

global.getRandImage = () => {
  // Mockup for articles images
  const imagesArray = [
    'Thumb-1.png',
    'Thumb-2.png',
    'Thumb-3.png'
  ];
  return imagesArray[Math.floor(Math.random() * imagesArray.length)];
}
