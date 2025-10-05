    function moveElement() {
        let left = 0;
        let top = 0;
        
        interval = setInterval(() => {
            left += 20;
            top += 20;
            myDiv.style.left = left + 'px';
            myDiv.style.top = top + 'px';

            if (left >= 200 && top >= 200) {
                clearInterval(interval);

                myDiv.style.width = '200px';
                myDiv.style.height = '200px';
                myDiv.style.backgroundColor = 'red';
            }
        }, 1500); 
    }

    moveElement();
