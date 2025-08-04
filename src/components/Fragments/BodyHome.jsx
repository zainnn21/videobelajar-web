import WideCard from "../Elements/WideCard";
import Title from "../Elements/TitleForm/Title";
import Paragraph from "../Elements/TitleForm/Paragraph";
import List from "../Elements/List";
import Card from "../Elements/Card";

import Card1 from "../../assets/1.jpg";
import Profile1 from "../../assets/profile 1.png";

import Card2 from "../../assets/2.jpg";
import Profile2 from "../../assets/profile 2.png";

import Card3 from "../../assets/3.jpg";
import Profile3 from "../../assets/profile 3.png";

import Card4 from "../../assets/4.jpg";
import Profile4 from "../../assets/profile 4.png";

import Card5 from "../../assets/5.jpg";
import Profile5 from "../../assets/profile 5.png";

import Card6 from "../../assets/6.jpg";
import Profile6 from "../../assets/profile 6.png";

import Card7 from "../../assets/7.jpg";
import Profile7 from "../../assets/profile 7.png";

import Card8 from "../../assets/8.jpg";
import Profile8 from "../../assets/profile 8.png";

import Card9 from "../../assets/9.jpg";
import Profile9 from "../../assets/profile 9.png";

import Rating1 from "../../assets/Star.png";
import RatingHalf from "../../assets/Masked Star.png";
import EmptyRating from "../../assets/gray Star.png";

const BodyHome = () => {
  return (
    <>
      <WideCard
        title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
        paragraph="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
        namecard="topcard"
      ></WideCard>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-3">
          <Title tvariant="text-left ">
            Koleksi Video Pembelajaran Unggulan
          </Title>
          <Paragraph pvariant="text-left font-medium">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </Paragraph>
        </div>
        <List>
          <li>Semua Kelas</li>
          <li>Pemasaran</li>
          <li>Desain</li>
          <li>Pengembangan Diri</li>
          <li>Bisnis</li>
        </List>
        <div className="flex gap-6">
          <Card
            source={Card1}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile1}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
          <Card
            source={Card2}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile2}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
          <Card
            source={Card3}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile3}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
        </div>
        <div className="flex gap-6">
          <Card
            source={Card4}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile4}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
          <Card
            source={Card5}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile5}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
          <Card
            source={Card6}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile6}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
        </div>
        <div className="flex gap-6">
          <Card
            source={Card7}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile7}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
          <Card
            source={Card8}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile8}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
          <Card
            source={Card9}
            texttitle="Big 4 Auditor Financial Analyst"
            ptitle="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik"
            srcprofile={Profile9}
            profilename="Jenna Ortega"
            job="Senior Accountant di"
            jobspan="Gojek"
            rating1={Rating1}
            rating2={Rating1}
            rating3={RatingHalf}
            rating4={EmptyRating}
            rating5={EmptyRating}
            ratingdesc="3.5 (86)"
            price="Rp 300K"
          ></Card>
        </div>
        <WideCard namecard="lowercard"></WideCard>
      </div>
    </>
  );
};

export default BodyHome;
