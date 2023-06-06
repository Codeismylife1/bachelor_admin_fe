export const userColumns = [
  { field: "id",headerName: "ID", width: "10" },
  { field: "butDugaar",headerName: "Бүртгэлийн дугаар", width: "150" },
  {
    field: "user",
    headerName: "Овог нэр",
    width: 150,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  {
    field: "email",
    headerName: "И-мэйл хаяг",
    width: 170,
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

// elsegchiin data
export const userRows = [
  {
    id: 1,
    butDugaar: 123456789,
    username: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag: "Баянхонгор",
    phoneNumber: "90808080",
    major: "Математик , Монгол хэл",
    rDugaar: "MA01291200",
    age: 20,
  },

  {
    id: 2,
    butDugaar: 123456789,

    username: "Ганаа",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 3,
    butDugaar: 123456789,

    username: "Анхаа",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 4,
    username: "Цэцгээ",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 5,
    username: "Jorj",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 6,
    username: "Snow",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 7,
    username: "Snow",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 8,
    username: "Snow",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 9,
    username: "Snow",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 10,
    username: "Snow",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 11,
    username: "Snow",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },

  {
    id: 12,
    username: "Snow",    butDugaar: 123456789,

    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    aimag: "baynhongor",
    phoneNumber: "90909090",
    major: " asdasdas",
    rDugaar: "MA01291200",
    age: 35,
  },
];

export const schoolColumns = [
  { field: "id", headerName: "id", width: "10" },
  {
    field: "schoolName",
    headerName: "Сургуулийн нэр",
    width: 200,
  },
  {
    field: "address",
    headerName: "Хаяг",
    width: 230,
  },
  {
    field: "description",
    headerName: "Тайлбар",
    width: 150,
  },
];

export const schoolRows = [
  {
    id: 1,
    schoolName: "Snow",
    address: "1snow@gmail.com",
    description: "baynhongor",
  },

  {
    id: 2,
    schoolName: "Ганаа",
    address: "1snow@gmail.com",
    description: "baynhongor",
  },
];
export const programColumns = [
  { field: "id", headerName: "Хөтөлбөрийн дугаар", width: "10" },
  { field: "hutDugaar", headerName: "Хөтөлбөрийн дугаар", width: "200" },
  {
    field: "hutulburName",
    headerName: "Хөтөлбөрийн нэр",
    width: 200,
  },
  {
    field: "time",
    headerName: "Сурах хугацаа",
    width: 230,
  },
  {
    field: "onoo",
    headerName: "Босго оноо",
    width: 230,
  },
  {
    field: "surID",
    headerName: "Сургуулийн ID",
    width: 230,
  },
];

export const programRows = [
  {
    id: 1,
    hutDugaar:"1",
    hutulburName: "Snow",
    time: "1snow@gmail.com",
    onoo: "baynhongor",
    surID: "baynhongor",
  },
  {
    id: 2,
    hutDugaar:"1",
    hutulburName: "Snow",
    time: "1snow@gmail.com",
    onoo: "baynhongor",
    surID: "baynhongor",
  },

];

export const majorColumns = [
  { field: "id", headerName: "Хөтөлбөрийн дугаар", width: "10" },
  { field: "dugaar", headerName: "Хөтөлбөрийн дугаар", width: "200" },

  {
    field: "hutulburName",
    headerName: "Хөтөлбөрийн нэр",
    width: 200,
  },
  {
    field: "mergeshil",
    headerName: "Мэргэшил",
    width: 230,
  },
  {
    field: "hutID",
    headerName: "Хөтөлбөрийн ID",
    width: 230,
  },
];

export const majorRows = [
  {
    dugaar: 1,
    id:1,
    hutulburName: "Snow",
    mergeshil: "1snow@gmail.com",
    hutID: "baynhongor",
  },
  {
    dugaar: 2,
    id:2,
    hutulburName: "Snow",
    mergeshil: "1snow@gmail.com",
    hutID: "baynhongor",
  },

];

