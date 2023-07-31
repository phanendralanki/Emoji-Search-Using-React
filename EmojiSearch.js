import React, { useState } from 'react'

const emojiData = [
    {
        id:1,
        symbol:"😁",
        name:"smile"
    },

    {
        id:2,
        symbol:"😔",
        name:"sad"
    },

    {
        id:3,
        symbol:"😡",
        name:"angry"
    },

    {
        id:4,
        symbol:"😂",
        name:"fun"
    },

    {
        id:5,
        symbol:"😍",
        name:"blush"
    },

    {
        id:6,
        symbol:"😆",
        name:"gigle"
    },

    {
        id:7,
        symbol:"😭",
        name:"cry"
    },

    {
        id:8,
        symbol:"❤",
        name:"love"
    },

    {
        id:9,
        symbol:"🏃",
        name:"run"
    },

    {
        id:10,
        symbol:"🥳",
        name:"party"
    },

    
];

export default function EmojiSearch() {


    const [searchEmoji,setSearchEmoji] = useState("");

    //to change every time when we type use setState property
    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
    }

    // To take input as a text and return symbol
    const showEmoji = emojiData.filter((emoji)=>{
        const emojiName = emoji.name.toLowerCase(); //changing emoji name to lower in array
        return (emojiName.includes(searchEmoji.toLowerCase())); //search value changing to lower case
    });

  return (
    <div>
      
            <h1>React Emoji App!!!</h1>
            <input type="search" name="" id="" value={searchEmoji} placeholder='Search for an Emoji....' onChange={handleChange}/>

            <div>
               {/* {
                emojiData.map((n)=>
                    <p style={{display:"inline"}}>{n.symbol}</p>
                    
                )
               } */}

               {/* {
                showEmoji.map((emoji)=>
                    <p>{emoji.symbol}</p>
                )
               } */}

{/* printing the values */}
               {
                showEmoji.map((emoji)=>
                    emoji.symbol
                )
               }
{/* printing the values */}
            </div>


    </div>
  )
}
