export type HomeworkItem = {
  id: string;
  subject: string;
  teacher: string;
  avatar: string;
  content: string;
  date: string;
  hasDetails?: boolean;
  topics?: {
    title: string;
    links: string[];
  }[];
};

export const homework: HomeworkItem[] = [
  // Latest homework items (shown in screenshots - ordered as they appear)
  {
    id: "1",
    subject: "ECONOMICS",
    teacher: "Mayank David",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2F7a7dc7a19a754ada9a92d3fd1a8f5995?format=webp&width=100",
    content:
      "Here I'm attaching the Revision notes of 2nd Chapter - Sectors of Economy. Write it down in your Economics Notebook and prepare well for your examination.",
    date: "Mon, 4 Aug",
    hasDetails: true,
    topics: [
      {
        title: "Sectors of Indian Economy - Revision Notes",
        links: ["View document"],
      },
    ],
  },
  {
    id: "2",
    subject: "INFORMATION TECHNOLOGY (IT)",
    teacher: "Kuldeep Christopher",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2F3f6d1168cb164932b56e072e26c830a2?format=webp&width=100",
    content:
      'Section "B" Unit - 1\nDIGITAL DOCUMENTATION (ADVANCED)\nThese are all your topic wise videos: Watch carefully',
    date: "Sat, 19 Jul",
    hasDetails: true,
    topics: [
      {
        title: "Topic - 5",
        links: [
          "https://drive.google.com/file/d/1YbfYXkiAhumJRJe_FssO7wTeZ3DFOS_/view?usp=drivesdk",
        ],
      },
      {
        title: "Topic - 6",
        links: [
          "https://drive.google.com/file/d/1YqDqY7gFhX43jR9eyY-GsjVqJkXJVZeM/view?usp=drivesdk",
        ],
      },
      {
        title: "Topic - 7",
        links: [
          "https://drive.google.com/file/d/1ZDlxwsxRYqe_qKOYZZpZ1-DqHRNXh7GY/view?usp=drivesdk",
        ],
      },
      {
        title: "Topic :- 8 & 9",
        links: [
          "https://drive.google.com/file/d/1Z6m5brkqPlob97cd04ZkU1XlAdzJc22c/view?usp=drivesdk",
        ],
      },
      {
        title: "Topic - 10",
        links: [
          "https://drive.google.com/file/d/1YMkMj192VkhTb0yUBvV_CfN6V_UtVgDr/view?usp=drivesdk",
        ],
      },
    ],
  },
  {
    id: "3",
    subject: "HISTORY",
    teacher: "MANISHA PRASAD",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2F11f14ba4063f49afab74aa643cd6742e?format=webp&width=100",
    content:
      "syllabus for 1st terminal examination nation\n1.nationalism in Europe(whole chapter..\n2 .Nationalism in India till 1st world war,khilafat and non cooperation .",
    date: "Tue, 15 Jul",
  },
  {
    id: "4",
    subject: "CHEM",
    teacher: "Shashi Bhushan Kumar",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2Fa25bab1e48404d49955eb68eb4081168?format=webp&width=100",
    content: "Ch-1",
    date: "Fri, 4 Jul",
  },
  {
    id: "5",
    subject: "ENGLISH",
    teacher: "Mr. Sameer Kumar",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2F1cfc57e5a4bf4833bb3dcb0958ca7a9b?format=webp&width=100",
    content:
      "A Reminder- Tomorrow, your projects will be submitted. Do not forget to bring it tomorrow.",
    date: "Tue, 24 Jun",
  },
  {
    id: "6",
    subject: "HISTORY",
    teacher: "Mrs. Nila Rani Mandal",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2F11f14ba4063f49afab74aa643cd6742e?format=webp&width=100",
    content: "History syllabus for WT-B4\nNationalism in Europe-Unit 1to 4",
    date: "Mon, 23 Jun",
  },
  {
    id: "7",
    subject: "SPORTS",
    teacher: "Mr. Rakesh Remy",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2F84fb7b2f7acc458faef60de80efe488e?format=webp&width=100",
    content:
      "सभी फुटबॉल खिलाड़ी जिनका सिल��क्शन लोगियों फुटबॉल टूर्नामेंट के लिए हुआ है वे सभी कल सुबह अपने इस और बूट के सा�� फुटबॉल ग्राउंड में उपस्थित होंगे। जो बेटियां म नहीं है वे भी वापस आने पर ट्रेनिंग में आ सकते हैं आप लोगों सेआग्राह है कि समय पर पहुंचें।",
    date: "Tue, 27 May",
  },
  {
    id: "8",
    subject: "GEOGRAPHY",
    teacher: "Susmita Das",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2F3a605489886d450394e871fa347e237d?format=webp&width=100",
    content:
      "HOLIDAY'S HOMEWORK-\n1. Make a project on the given topic-\n   *Soil profile with figure.\n   *Types of soil(add details of each soil).\n   *Soil degradation and conservation measures adopted by the govt. of India.",
    date: "Mon, 26 May",
  },
  {
    id: "9",
    subject: "CHEMISTRY",
    teacher: "Shashi Bhushan Kumar",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2Fa25bab1e48404d49955eb68eb4081168?format=webp&width=100",
    content: "Notes",
    date: "Fri, 23 May",
  },
  {
    id: "10",
    subject: "CHEMISTRY",
    teacher: "Shashi Bhushan Kumar",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2Fa25bab1e48404d49955eb68eb4081168?format=webp&width=100",
    content: "Chapter 1",
    date: "Fri, 23 May",
  },
];
