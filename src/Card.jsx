import "./Card.css"

export default function Card(){
    const arr=[
        {
            FirstName:"Nilofar",
            LastName:"Pinjari",
            Address:"Shivajinagar,Nashik",
            MobileNo: "9156662674",
            img:"https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740"
        },
        {
            FirstName:"Nainisha",
            LastName:"Pawar",
            Address:"IndiraNagar,Nashik",
            MobileNo: "8669571347",
            img:"https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740"
        },
        {
            FirstName:"Nikita",
            LastName:"Patil",
            Address:"UttamNagar,Nashik",
            MobileNo: "7262978006",
            img:"https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740"
        }
       

    ];
    
    return(
        <div className="container">
            {arr.map((a)=>(
                <div className="card">
                    <label>{a.FirstName}&nbsp;{a.LastName}</label>
                    <p>{a.Address}</p>
                    <p>{a.MobileNo}</p>
                    <img src={a.img}></img>
                </div>
            ))}
        </div>
    );
}
