export const userColumns = [
    { field: "id", headerName: "Бүртгэлийн дугаар", width: "200" },
  {
      field: "user",
      headerName: "Овог нэр",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
           
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "И-мэйл хаяг",
      width: 230,
    },
    {
      field: "rDugaar",
      headerName: "Регистрийн дугаар",
      width: 150,
    },
    {
      field: "phoneNumber",
      headerName: "Утасны дугаар",
      width: 120,
    },
    
    {
      field: "major",
      headerName: "Сонгосон мэргэжлүүд",
      width: 190,
    },
    {
      field: "aimag",
      headerName: "Аймгийн мэдээлэл",
      width: 210,
    },
   
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 2,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 3,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 4,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 5,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 6,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 7,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 8,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 9,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 10,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 11,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
    {
      id: 12,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      aimag: 'baynhongor',
      phoneNumber : '90909090',
      major: ' asdasdas',
      rDugaar : 'MA01291200',
      age: 35,
    },
   
  ];