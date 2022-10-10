import React from "react";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d05ae2686msh2a300b19c8bca32p1df2b9jsn792213b487fa',
		'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
	}
};

fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    }
    return(
        <>
            <div className="container">
                <div className="box">
                    <h2>Can you guess the dog breed?</h2>
                    <img src="images/puppy.jpg"></img>
                    <button onClick={()=>callImg()}> Click Here </button>
                </div>
            </div>
        </>
    )
}
export default Main;