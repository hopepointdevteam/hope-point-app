import { Ministry } from '../models/ministries';

export const AllMinistries: Ministry[] = [
  {id: 0, name: "Hope Point Men", href: "ministries/mens", ImgUrl: "/assets/images/Mens_BG.jpg", logoUrl:"/assets/images/Mens_Logo_350x350.png", MinistryGroup: 'Adult'},
  {id: 1, name: "Hope Point Ladies", href: "ministries/ladies", ImgUrl: "/assets/images/Ladies_BG.jpg", logoUrl: "/assets/images/Ladies_Logo_350x350.png", MinistryGroup: 'Adult'},
  {id: 2, name: "PT Cruisers", href: "ministries/cruisers", ImgUrl: "/assets/images/Senior_BG.jpg", logoUrl: "/assets/images/Senior Adult Logo.png", MinistryGroup: 'Adult'},
  {id: 3, name: "Kids", href: "ministries/kids", ImgUrl: "/assets/images/HPKids_BG.jpg", logoUrl: "/assets/images/Kids_Logo_350x350.png", MinistryGroup: 'Family'},
  {id: 4, name: "Club 45", href: "ministries/club45", ImgUrl: "/assets/images/Club45_BG.jpg", logoUrl: "/assets/images/Club45_Logo_350x350.png", MinistryGroup: 'Family'},
  {id: 5, name: "Jr. High", href: "ministries/jrhigh", ImgUrl: "/assets/images/JrHigh_BG.jpg", logoUrl: "/assets/images/YF_JrHigh_logo_350x350.png", MinistryGroup: 'Family'},
  {id: 6, name: "High School", href: "ministries/highshcool", ImgUrl: "/assets/images/hs.jpg", logoUrl: "/assets/images/YF_High_logo_350x350.png", MinistryGroup: 'Family' }
]