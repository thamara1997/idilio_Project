export enum routeNames {
  Overview = "/",
  NewDesign = "/newdesign/*",
  ResourceDesign = "/resourcedesign",
  JoinUs = "/joinus",
  Community = "/community",
  SayHello = "/sayhello",
  Profile = "/profile",
  Register = "/register",
  Login = "/login",
  ProfileSetup = "/profilesetup",

  //under new design
  AlbumCover = "/albumcover/",
  Podcast = "/podcast",
  BookCover = "/bookcover",
  Flyer = "/flyer",
  Mascotlogo = "/mascotlogo",
  Companylogo = "/companylogo",

  AlbumCover1 = "/albumcover/:id/requirement",
  Podcast1 = "/podcast/:id/requirement",
  BookCover1 = "/bookcover/:id/requirement",
  Flyer1 = "/flyer/:id/requirement",
  Mascotlogo1 = "/mascotlogo/:id/requirement",
  Companylogo1 = "/companylogo/:id/requirement",

  NDesignDetails = "/newdesignrequirement/:id",

  //under new design
  RDesignDetails = "/resourcedesign/details/:id",
  Requirement = "/resourcedesign/details/:id/requirement",

  Progress = "/resourcedesign/details/progress/:id",
}
