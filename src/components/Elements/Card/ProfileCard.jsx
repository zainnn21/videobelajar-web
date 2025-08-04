const ProfileCard = (props) => {
  const { source, name } = props;
  return <img src={source} className="w-10 h-10 rounded-[10px]" alt={name} />;
};

export default ProfileCard;
