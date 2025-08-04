const ProfileCard = (props) => {
  const { srcprofile, name } = props;
  return (
    <img src={srcprofile} className="w-10 h-10 rounded-[10px]" alt={name} />
  );
};

export default ProfileCard;
