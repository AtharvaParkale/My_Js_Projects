  // First we need to get those 3 li's
  const triggers = document.querySelectorAll('.cool > li')
  // Now grab the dropdown box 
  const background = document.querySelector('.dropdownBackground')
  //Also grab your nav
  const navBar = document.querySelector('.top')


  // Create two sunctions for when we hover on the 
  // li and when we the li
  function handleEnter() {
    this.classList.add('trigger-enter');

    // The given function will not work as there is no arrow function
    // setTimeout(function(){
    //   this.classList.add('trigger-enter-active');
    // },150);

    setTimeout(()=>{
      // console.log(this);
      this.classList.add('trigger-enter-active');
    },150);

    //Adding dropdown background 

    background.classList.add('open');

    //This will show exactly dropdown have we hovered
    const dropdown=this.querySelector('.dropdown');
    console.log(dropdown);
    //Generating coords of the dropdown selected
    const dropdownCoords=dropdown.getBoundingClientRect();
    //Getting the navbar coords

    const navCoords=navBar.getBoundingClientRect();
    console.log(navCoords);

    //Updating the coords on the page for navnar and dropdown

    // In this case if there is something above the navbar then 
    // the dropdown background may misbehave a little
    //to avoid thisw we subtract navCoords from dropDown coods

    const coords={
      height:dropdownCoords.height,
      width:dropdownCoords.width,
      top:dropdownCoords.top - navCoords.top,
      left:dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width',`${coords.width}px`);
    background.style.setProperty('height',`${coords.height}px`);
    background.style.setProperty('top',`${coords.top}px`);
    background.style.setProperty('left',`${coords.left}px`);

  }
  function handleLeave() {
    this.classList.remove('trigger-enter');
    setTimeout(()=>{
      // console.log(this);
      this.classList.remove('trigger-enter-active');
    },150);

    background.classList.remove('open');
  }

  triggers.forEach(t => t.addEventListener('mouseenter', handleEnter));
  triggers.forEach(t => t.addEventListener('mouseleave', handleLeave));