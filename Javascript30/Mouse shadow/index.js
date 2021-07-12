const hero = document.querySelector('.hero');
        const text = hero.querySelector('h1');
        const walk = 20;

        function shadow(e) {
            const width = hero.offsetWidth;
            const height = hero.offsetHeight;
            let x = e.offsetX;
            let y = e.offsetY;
            // console.log(this,e.target);
            // This is always going to be the hero div as it is called inside the function which is called on hero;
            // e.target is th eplace where it got triggered on
            // This will always be the same for this function that is hero
            // e.target keeps on changing
            if (this !== e.target) {
                x = x + e.target.offsetLeft;
                y = y + e.target.offsetTop;
            }
            //Figuiring out how far the shadow of this text streach
            const xWalk = Math.round((x / width * walk) - (walk / 2));
            const yWalk = Math.round((y / width * walk) - (walk / 2));
            // console.log(xWalk,yWalk); 

            text.style.textShadow = `${xWalk}px ${yWalk}px 0 grey`;

        }

        hero.addEventListener('mousemove', shadow);