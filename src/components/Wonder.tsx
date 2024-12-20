import React from 'react'

export default function Wonder() {
    const empData = [
        { name:"Christ the Redeemer",location:"Brazi",area:"Brazil", url:"https://cdn.thecollector.com/wp-content/uploads/2021/12/seven-wonder-world-christ-statue-colosseum-great-wall.jpg?width=1400&quality=70"},
        { name:"The Colosseum",location:"Rome",area:"Italy",url:"https://cdn.thecollector.com/wp-content/uploads/2021/12/colosseum-world-wonder-national-geographic.jpg"},
        { name:"The Great Wall of China",location:"china",area:"China",url:"https://cdn.thecollector.com/wp-content/uploads/2021/12/great-wall-china-national-geographic.jpg"},
        { name:"The Taj Mahal",location:"India",area:"Agra",url:"https://cdn.thecollector.com/wp-content/uploads/2021/12/the-taj-mahal-architectural-digest.jpg"},
        { name:"Machu Picchu",location:"North America",area:"peru",url:"https://cdn.thecollector.com/wp-content/uploads/2021/12/machu-picchu-world-wonder.jpg" },
        { name:"Chichén Itza",location:"Mexico",area:"Mexico",url:"https://cdn.thecollector.com/wp-content/uploads/2021/12/chichen-itza-image-1-1.jpg"},
        { name:"Petra",location:"Jordan",area:"Jordan",url:"https://cdn.thecollector.com/wp-content/uploads/2021/12/petra-jordan-world-wonder-scaled-1.jpg"},
      
      ];
  return (
    <div>
<table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Area</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.name}</td>
                    <td>{x.location}</td>
                    <td>{x.area}</td>
                    <td><img src={x.url} widht="200px" height="150px" ></img></td>

                  </tr>
                  
                 )
            )}

           
          </tbody>
          </table>



    </div>
  )
}
