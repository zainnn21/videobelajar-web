import LogoImg from "../Elements/Navbar/logo";
import Address from "../Elements/address";
import CategoryFooter from "../Elements/FCategory";
import IconFooter from "../Elements/IconFooter/Index";

const FooterHome = () => {
  return (
    <div className="bg-white border px-30 py-15 gap-5 border-[#3A35411F] justify-center flex flex-col items-center">
      <div className="flex justify-between md:w-300 ">
        <div className="flex flex-col gap-4 md:max-w-[352px]">
          <LogoImg></LogoImg>
          <div className="flex flex-col gap-3">
            <Address
              title="Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!"
              p1="Jl. Usman Effendi No. 50 Lowokwaru, Malang"
              p2="+62-877-7123-1234"
            ></Address>
          </div>
        </div>
        <div className="flex gap-12">
          <CategoryFooter title="Kategori">
            <li>Digital & Teknologi</li>
            <li>Pemasaran</li>
            <li>Manajemen Bisnis</li>
            <li>Pengembangan Diri</li>
            <li>Desain</li>
          </CategoryFooter>
          <CategoryFooter title="Perusahaan">
            <li>Tentang Kami</li>
            <li>FAQ</li>
            <li>Kebijakan Privasi</li>
            <li>Ketentuan Layanan</li>
            <li>Bantuan</li>
          </CategoryFooter>
          <CategoryFooter title="Komunitas">
            <li>Tips Sukses</li>
            <li>Blog</li>
          </CategoryFooter>
        </div>
      </div>
      <hr className="w-full md:w-300 border border-[#3A35411F]" />
      <div className="flex justify-between w-full md:max-w-300">
        <IconFooter></IconFooter>
      </div>
    </div>
  );
};

export default FooterHome;
