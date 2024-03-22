import NewsListItem from './NewsListItem';

const NewsItem = (props) => {
  const newshandler = props.news.map((item) => (
    <NewsListItem key={item.id} item={item} />
  ));
  //   <div key={item.id}>
  //     <h3>{item.title}</h3>
  //     <div>{item.feed}</div>
  //   </div>
  // ));

  return <>{newshandler}</>;
};
export default NewsItem;
