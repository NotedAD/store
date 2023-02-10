const PageArticleInfo = ({ name, img, body }) => {
  return (
    <>
      <p>{name}</p>
      <img src={img} alt="Photo Article" />
      <p>{body}</p>
    </>
  );
};

export default PageArticleInfo;
