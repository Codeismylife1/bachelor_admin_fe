import School from "@mui/icons-material/School";

export const userColumns = [

  { field: "id", headerName: "id", width: "10" },
  { field: "burtgel_Id", headerName: "Бүртгэлийн/Д", width: "100" },
  {
    field: "ovog_ner",
    headerName: "Овог нэр",
    width: 150,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.ovog_ner}</div>;
    },
  },
  {
    field: "email",
    headerName: "И-мэйл хаяг",
    width: 170,
  },
  {
    field: "rd",
    headerName: "Регистрийн дугаар",
    width: 100,
  },
  {
    field: "utas",
    headerName: "Утасны дугаар",
    width: 120,
  },

  {
    field: "songoson_mergejil",
    headerName: "Сонгосон мэргэжлүүд",
    width: 700,
  },
  {
    field: "aimag_ner",
    headerName: "Аймгийн мэдээлэл",
    width: 210,
  },
];

// elsegchiin data
export const userRows = [

  {
    id: 1,
    burtgel_Id: 123456789,
    ovog_ner: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag_ner: "Баянхонгор",
    utas: "90808080",
    songoson_mergejil: "Математик , Монгол хэл",
    rd: "MA01291200",
    age: 20,
  },

  {
    id: 2,
    burtgel_Id: 123456789,
    ovog_ner: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag_ner: "Баянхонгор",
    utas: "90808080",
    songoson_mergejil: "Математик , Монгол хэл",
    rd: "MA01291200",
    age: 20,
  },

  {
    id: 3,
    burtgel_Id: 123456789,
    ovog_ner: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag_ner: "Баянхонгор",
    utas: "90808080",
    songoson_mergejil: "Математик , Монгол хэл",
    rd: "MA01291200",
    age: 20,
  },

  {
    id: 4,
    burtgel_Id: 123456789,
    ovog_ner: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag_ner: "Баянхонгор",
    utas: "90808080",
    songoson_mergejil: "Математик , Монгол хэл",
    rd: "MA01291200",
    age: 20,
  },
  {
    id: 5,
    burtgel_Id: 123456789,
    ovog_ner: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag_ner: "Баянхонгор",
    utas: "90808080",
    songoson_mergejil: "Математик , Монгол хэл",
    rd: "MA01291200",
    age: 20,
  },
  {
    id: 6,
    burtgel_Id: 123456789,
    ovog_ner: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag_ner: "Баянхонгор",
    utas: "90808080",
    songoson_mergejil: "Математик , Монгол хэл",
    rd: "MA01291200",
    age: 20,
  },

  {
    id: 7,
    burtgel_Id: 123456789,
    ovog_ner: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag_ner: "Баянхонгор",
    utas: "90808080",
    songoson_mergejil: "Математик , Монгол хэл",
    rd: "MA01291200",
    age: 20,
  },
  {
    id: 8,
    burtgel_Id: 123456789,
    ovog_ner: "Баатарцогт Анхбаяр",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anhaa@gmail.com",
    aimag_ner: "Баянхонгор",
    utas: "90808080",
    songoson_mergejil: "Математик , Монгол хэл",
    rd: "MA01291200",
    age: 20,
  },

];

export const schoolColumns = [
  { field: "id", headerName: "id", width: "10" },
  {
    field: "name",
    headerName: "Сургуулийн нэр",
    width: 400,
  },
  {
    field: "slug",
    headerName: "Товч нэр",
    width: 100,
  },
  {
    field: "link",
    headerName: "Website",
    width: 230,
  },

];

// data
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
  { field: "id", headerName: "Х/Д", width: "10" },
  {
    field: "name",
    headerName: "Хөтөлбөрийн нэр",
    width: 350,
  },
  {
    field: "s_time",
    headerName: "Сурах хугацаа",
    width: 100,
  },
  {
    field: "bosgo_onoo",
    headerName: "Босго оноо",
    width: 100,
  },
  {
    field: "s_name",
    headerName: "Сургуулийн нэр",
    width: 330,
  },
];

export const programRows = [
  {
    id: 1,
    hutDugaar: "1",
    name: "Snow",
    s_time: "4",
    bosgo_onoo: "480",
    "School.name": "ИХ ЗАСАГ ХУУЛЬ ЗҮЙН СУРГУУЛЬ",
  },
  {
    id: 2,
    hutDugaar: "1",
    name: "Snow",
    s_time: "4",
    bosgo_onoo: "480",
    "School.name": "САНХҮҮ ЭДИЙН ЗАСГИЙН СУРГУУЛЬ",
  },

];

export const majorColumns = [
  { field: "id", headerName: "Мэргэжлийн дугаар", width: "10" },
  {
    field: "m_name",
    headerName: "Мэргэжлийн нэр",
    width: 300,
  },
  {
    field: "mergeshil",
    headerName: "Мэргэшил",
    width: 330,
  },
  {
    field: "h_name",
    headerName: "Хөтөлбөрийн нэр",
    width: 230,
  },
  {
    field: "s_name",
    headerName: "Сургуулийн нэр",
    width: 230,
  },
];

export const majorRows = [
  {
    dugaar: 1,
    id: 1,
    name: "Гадаад худалдаа гаалийн менежмент",
    mergeshil: "Элчин сайдын яамны худалдааны атташе, олон улсын байгууллагын худалдааны ажилтан, дэлгүүр худалдааны байгууллагуудын худалдааны мэргэжилтэн гэх мэт",
    hname: "Нягтлан бодох бүртгэл",
    sname: "ЖЭСАН ЧИНГИС ХААН ГАДААД ХЭЛ СОЁЛЫН СУРГУУЛЬ",

  },
  {
    dugaar: 2,
    id: 2,
    name: "Бизнесийн удирдлага",
    mergeshil: "Төслийн менежер, мэргэжилтэн, стратеги төлөвлөлтийн мэргэжилтэн, байгууллагын бүх шатны менежер, мэргэжилтэн, бизнесийн зөвлөх, үндсэн үйл ажиллагааны менежер, мэргэжилтэн гэх мэт",
    hname: "Аюулгүй байдал хууль сахиулах",
    sname: "ЖЭСАН ЧИНГИС ХААН ГАДААД ХЭЛ СОЁЛЫН СУРГУУЛЬ",

  }

];
