const x = document.querySelectorAll('.inbox input[type="checkbox"]');

    let lastChecked;

    // console.log(x);

    function handleFunction(e) 
    {
      let inBetween = false;
      if (e.shiftKey && this.checked) 
      {
        x.forEach(a => 
        {
          if (a === this || a === lastChecked) 
          {
            inBetween = !inBetween;
          }
          if (inBetween) 
          {
            a.checked = true;
          }
        });
      }
      lastChecked = this;
    }

    //When we click

    x.forEach(a => a.addEventListener('click', handleFunction));