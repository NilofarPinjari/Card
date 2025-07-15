import "./Card.css"

export default function Card(){
    const arr=[
        {
            FirstName:"Nilofar",
            LastName:"Pinjari",
            Address:"Shivajinagar,Nashik",
            MobileNo: "9156662674",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrn4-gdK6RLOs-WEEhBtjNLGKrfoehUcwB5g&s"
        },
        {
            FirstName:"Nainisha",
            LastName:"Pawar",
            Address:"IndiraNagar,Nashik",
            MobileNo: "8669571347",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8pa5aJmlaWSJC1T3A58W0EH4JfeHbaJtk-7e_eJslTs_chd5gCBgba8gvOO6UdwLU-M&usqp=CAU"
        },
        {
            FirstName:"Nikita",
            LastName:"Patil",
            Address:"UttamNagar,Nashik",
            MobileNo: "7262978006",
            img:"https://static.vecteezy.com/system/resources/thumbnails/046/883/722/small/professional-stock-image-of-a-young-businesswoman-posing-confidently-dressed-in-formal-attire-against-an-isolated-white-backdrop-perfect-for-corporate-branding-free-photo.jpg"
        },
       {
            FirstName:"Gauri",
            LastName:"Bhandari",
            Address:"UttamNagar,Nashik",
            MobileNo: "7262978006",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrn4-gdK6RLOs-WEEhBtjNLGKrfoehUcwB5g&s"
        },
        {
            FirstName:"Shruti",
            LastName:"Raundal",
            Address:"UttamNagar,Nashik",
            MobileNo: "7262978006",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8pa5aJmlaWSJC1T3A58W0EH4JfeHbaJtk-7e_eJslTs_chd5gCBgba8gvOO6UdwLU-M&usqp=CAU"
        },
        {
            FirstName:"Devyani",
            LastName:"Deore",
            Address:"Ashoknagar,Nashik",
            MobileNo: "7262978006",
            img:"https://static.vecteezy.com/system/resources/thumbnails/046/883/722/small/professional-stock-image-of-a-young-businesswoman-posing-confidently-dressed-in-formal-attire-against-an-isolated-white-backdrop-perfect-for-corporate-branding-free-photo.jpg"
        },
        {
            FirstName:"Vaishnavi",
            LastName:"Thakare",
            Address:"Satpur,Nashik",
            MobileNo: "7262978006",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8pa5aJmlaWSJC1T3A58W0EH4JfeHbaJtk-7e_eJslTs_chd5gCBgba8gvOO6UdwLU-M&usqp=CAU"
        },
        {
            FirstName:"Kajal",
            LastName:"Pardeshi",
            Address:"GovindNagar,Nashik",
            MobileNo: "7262978006",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrn4-gdK6RLOs-WEEhBtjNLGKrfoehUcwB5g&s"
        },
        {
            FirstName:"Aditi",
            LastName:"Nakave",
            Address:"Sinner,Nashik",
            MobileNo: "7262978006",
            img:"https://static.vecteezy.com/system/resources/thumbnails/046/883/722/small/professional-stock-image-of-a-young-businesswoman-posing-confidently-dressed-in-formal-attire-against-an-isolated-white-backdrop-perfect-for-corporate-branding-free-photo.jpg"
        },
        {
            FirstName:"Roshani",
            LastName:"Pinjari",
            Address:"CarbonNaka,Nashik",
            MobileNo: "7262978006",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrn4-gdK6RLOs-WEEhBtjNLGKrfoehUcwB5g&s"
        }

    ];
    
    return(
       <div className="container">
        {arr.map((a, index) => (
            <div className="card" key={index}>
            <div className="card1">
           <img src={a.img}></img>
           <div className="card1-content">
          <label>{a.FirstName}&nbsp;{a.LastName} </label>
          <p>🏠 {a.Address}</p>
          <p className="phone">📞{a.MobileNo}</p>
        </div>
        </div>
                </div>
            ))}
        </div>
        
    );
}