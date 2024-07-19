interface DashboardInboxDetailData {
  owner: DashboarInboxDetailOwner;
  publishDate: string;
  message: string;
  post: string;
  id: string;
}

interface DashboarInboxDetailOwner {
  firstName: string;
  lastName: string;
  picture: string;
  title: string;
  id: string;
}
