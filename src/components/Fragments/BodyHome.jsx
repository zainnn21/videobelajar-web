import WideCard from "../Elements/WideCard";
import Title from "../Elements/TitleForm/Title";
import Paragraph from "../Elements/TitleForm/Paragraph";
import List from "../Elements/List";
import Card from "../Elements/Card";

const BodyHome = () => {
  return (
    <>
      <WideCard
        title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
        paragraph="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
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
        <Card></Card>
      </div>
    </>
  );
};

export default BodyHome;
