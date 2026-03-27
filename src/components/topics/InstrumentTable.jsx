import React from "react";
import Table from "react-bootstrap/Table";
import { Image as ImageIcon } from "react-bootstrap-icons";

function InstrumentTable() {
  const products = [
    {
      id: 1,
      productNo: "10-2525T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "5 1/2″ Mayo Scissors – straight beveled titanium",
      category: "Scissor",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2019/05/products-10-2525T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/5-1-2-mayo-scissors-str-beveled-titanium/",
    },
    {
      id: 2,
      productNo: "10-2514T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "7″ Metz Scissors – curved titanium",
      category: "Scissor",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2019/06/products-10-2514T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/7-metz-scissors-cvd-titanium/",
    },
    {
      id: 3,
      productNo: "65-5450T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "6″ Ryder Needle Holder – LighTouch",
      category: "Needle Holder",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2019/06/products-65-5450T_1.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/6-ryder-needle-holder-lightouch/",
    },
    {
      id: 4,
      productNo: "65-5420T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "6 1/4″ Mayo-Hegar Needle Holder – LighTouch",
      category: "Needle Holder",
      photo: "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2020/05/products-65-5422t.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/6-1-4-mayo-hegar-needle-holder-lightouch/",
    },
    {
      id: 5,
      productNo: "15C08",
      manufacturer: "advinhealthcare",
      description: "Laparoscopic Stainless Steel Needle Holder",
      category: "Laparoscopic",
      photo: "https://advinhealthcare.com/wp-content/uploads/2019/06/Stainless-Steel-Needle-Holder-1-1.jpg",
      link: "https://advinhealthcare.com/product/laparoscopic-needle-holder/",
    },
    {
      id: 6,
      productNo: "15C12",
      manufacturer: "advinhealthcare",
      description: "Laparoscopic Satinsky Forceps",
      category: "Laparoscopic",
      photo: "https://advinhealthcare.com/wp-content/uploads/2019/06/Endoscopic-Satinsky-Forceps-1.jpg",
      link: "https://advinhealthcare.com/product/laparoscopic-satinsky-forceps/",
    },
    {
      id: 7,
      productNo: "14-1251T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "5 1/2″ Crile Hemo Forceps – curved titanium",
      category: "Hemostat / Ring-Handle Forceps",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/14-1251T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/5-1-2-crile-hemo-forceps-cvd-titanium/",
    },
    {
      id: 8,
      productNo: "14-1202T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "5″ Halsted Mosquito Forceps – curved Titanium",
      category: "Hemostat / Ring-Handle Forceps",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2017/09/14-1202T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/5-halsted-mosquito-forceps-cvd-titanium/",
    },
    {
      id: 9,
      productNo: "73-1197T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "Adson Cerebellum Retractor, 7 1/2″ angled, shrp, titanium",
      category: "Retractors",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2020/04/products-73-1197T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/adson-cerebellum-ret-7-1-2-ang-shrp-titanium/",
    },
    {
      id: 10,
      productNo: "18-1055T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "Army Navy Retractor, titanium, set of 2, 8 1/4″ (21cm)",
      category: "Retractors",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2023/01/18-1055T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/army-navy-ret-titanium-set-of-2-8-1-4-21cm/",
    },
    {
      id: 11,
      productNo: "71-5375T",
      manufacturer: "BOSS Instruments, Ltd",
      description:
        "7 1/4″ Jacobson Micro Scissors – reg blades titanium straight",
      category: "Cardiac",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2019/07/products-71-5375T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/7-1-4-jacobson-micro-scissors-reg-blds-titanium-str/",
    },
    {
      id: 12,
      productNo: "65-5125T",
      manufacturer: " BOSS Instruments, Ltd",
      description: "7″ LighTouch Needle Holder – w/ lock titanium",
      category: "Cardiac",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2019/05/products-65-5125T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/7-lightouch-needle-holder-w-lock-titanium/",
    },
    {
      id: 13,
      productNo: "70-3845",
      manufacturer: "BOSS Instruments, Ltd",
      description: "Interchangeable Chisel Blade Set",
      category: "Orthopedic",
      photo: "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2020/08/70-3845.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/interchangeable-chisel-blade-set/",
    },
    {
      id: 14,
      productNo: "79-0808",
      manufacturer: "BOSS Instruments, Ltd",
      description: "12″ Plate Bending Press",
      category: "Orthopedic",
      photo: "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2017/08/79-0808.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/12-plate-bending-press/",
    },
    {
      id: 15,
      productNo: "70-1008T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "Titanium 7″ Cushing IVD Rongeur 2x10mm straight",
      category: "Neuro",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/70-1008T-1.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/titanium-7-cushing-ivd-rongeur-2x10mm-str/",
    },
    {
      id: 16,
      productNo: "70-2802EP",
      manufacturer: "BOSS Instruments, Ltd",
      description: "8″ Micro APEX Ejector Rongeur 2mm Panther Ceramic Coated",
      category: "Neuro",
      photo: "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2019/05/products-70-2802EP_1.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/8-micro-apex-ejector-rongeur-2mm-panther-ceramic-coated/",
    },
    {
      id: 17,
      productNo: "90-3520",
      manufacturer: "Sklar",
      description: "Vaginal Retractor Sklar® Breisky Handheld 11 Inch Length OR / Surgical Grade",
      category: "OB/GYN",
      photo: "https://imgcdn.mckesson.com/CumulusWeb/Images/High_Res/1259655_left.jpg",
      link: "https://mms.mckesson.com/product/1259655/Sklar-90-3520",
    },
    {
      id: 18,
      productNo: "505-360",
      manufacturer: "Jarit",
      description: "Billroth Tumor Forcep - 4-Sharp Prongs, Straight 11",
      category: "OB/GYN",
      photo: "https://products.integralife.com/ccstore/v1/images/?source=/file/v1652822793753219855/products/505-360.jpg",
      link: "https://products.integralife.com/billroth-tumor-forcep/product/surgical-instruments-hospitals-surgery-centers-tissue-banks-jarit-obstetrics-gynecology-forceps-billroth-tumor-forcep",
    },
    {
      id: 19,
      productNo: "10-6475T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "4 3/4″ Adson Tissue Forceps – 1×2 titanium",
      category: "Tissue/Dressing Forceps",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2019/05/products-10-6475T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/4-3-4-adson-tiss-forcep-1x2-titanium/",
    },
    {
      id: 20,
      productNo: "72-6360T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "Rhoton Tumor Forceps, Bay, Titanium, serrated, 8 3/4″",
      category: "Tissue/Dressing Forceps",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2020/04/products-72-6360T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/rhoton-tumor-fcps-bay-titanium-serr-8-3-4/",
    },
    {
      id: 21,
      productNo: "72-8528T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "Malis Type Bay Titanium Needle Holder 8 3/4″ – straight jaw 0.4mm tips",
      category: "ENT",
      photo: "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2020/05/products-72-8526t_1.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/malis-type-bay-titanium-needle-holder-8-3-4-strt-jaw-0-4mm-tips/",
    },
    {
      id: 22,
      productNo: "65-5206T",
      manufacturer: "BOSS Instruments, Ltd",
      description: "7 1/4″ Titanium LighTouch Needle Holder – Streamline lock",
      category: "ENT",
      photo:
        "https://b3896616.smushcdn.com/3896616/wp-content/uploads/2019/05/products-65-5206T.jpg?lossy=2&strip=1&webp=1",
      link: "https://bossinstruments.com/product/7-1-4-titanium-lightouch-needle-holder-streamline-lock/",
    },
    {
      id: 23,
      productNo: "BR99-29105",
      manufacturer: "BR Surgical",
      description:
        "Suction Tube Handle Rigid Type Open Tip Frazier Style Vented 7 Fr. Sterile",
      category: "Suction Tubes",
      photo:
        "https://imgcdn.mckesson.com/CumulusWeb/Images/Original_Image/1220054_front.jpg",
      link: "https://mms.mckesson.com/product/1220054/BR-Surgical-BR99-29105",
    },
    {
      id: 24,
      productNo: "RH551435",
      manufacturer: "V. Mueller",
      description:
        "Suction Tube Handle V. Mueller Rigid Type Bulb Tip Frazier Style Non-Vented 3.5 mm Diameter NonSterile",
      category: "Suction Tubes",
      photo:
        "https://imgcdn.mckesson.com/CumulusWeb/Images/Original_Image/800577.jpg",
      link: "https://mms.mckesson.com/product/800577/V-Mueller-RH551435",
    },
    {
      id: 25,
      productNo: "28571E",
      manufacturer: "KARL STORZ",
      description: "SILCUT PRO Giga Punch",
      category: "Arthroscopy",
      photo:
        "https://www.karlstorz.com/catalog-api/mediafiles/stream/de_en/297346",
      link: "https://www.karlstorz.com/de/en/product-detail-page.htm?productID=1000058499&cat=1000107128",
    },
    {
      id: 26,
      productNo: "28571CLU",
      manufacturer: "KARL STORZ",
      description: "SILCUT PRO Side Punch",
      category: "Arthroscopy",
      photo:
        "https://www.karlstorz.com/catalog-api/mediafiles/stream/de_en/328610",
      link: "https://www.karlstorz.com/de/en/product-detail-page.htm?productID=1000058441&cat=1000107128",
    },
    {
      id: 27,
      productNo: "401UR",
      manufacturer: "Mada Medical Products",
      description: "Needle Free Injector Kit Urology MadaJet Surgical Grade",
      category: "Urology",
      photo:
        "https://imgcdn.mckesson.com/CumulusWeb/Images/Original_Image/520742.JPG",
      link: "https://mms.mckesson.com/product/520742/Mada-Medical-Products-401UR",
    },
    {
      id: 28,
      productNo: "GU8390",
      manufacturer: "V. Mueller",
      description:
        "Prostatic Tractor Lowsley 13 Inch Double Action, Urology, Matte Finish",
      category: "Urology",
      photo:
        "https://imgcdn.mckesson.com/CumulusWeb/Images/Original_Image/763783.jpg",
      link: "https://mms.mckesson.com/product/763783/V-Mueller-GU8390",
    },
    {
      id: 29,
      productNo: "68-693",
      manufacturer: "Integra Lifesciences",
      description: "Dental Crown Gauge",
      category: "Dental",
      photo:
        "https://imgcdn.mckesson.com/CumulusWeb/Images/Original_Image/822176.jpg",
      link: "https://mms.mckesson.com/product/822176/Integra-Lifesciences-68-",
    },
    {
      id: 30,
      productNo: "76-3",
      manufacturer: "Integra Lifesciences",
      description:
        "Dental Forceps Vantage® 6 Inch Length Floor / Office Grade Pakistani Stainless Steel NonSterile Locking Thumb Handle Straight Serrated Tips",
      category: "Dental",
      photo:
        "https://imgcdn.mckesson.com/CumulusWeb/Images/Original_Image/927554.jpg",
      link: "https://mms.mckesson.com/product/927554/Integra-Lifesciences-76-3",
    },
  ];

  return (
    <div className="product-table-wrapper">
      <h2>New Instrument Catalog</h2>

      <Table bordered hover responsive className="product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product No.</th>
            <th>Manufacturer</th>
            <th>Description</th>
            <th>Category</th>
            <th>Photo</th>
            <th>Link</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productNo}</td>
              <td>{product.manufacturer}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>

              <td>
                <div className="photo-hover-box">
                  <span className="photo-icon">
                    <ImageIcon size={20} />
                  </span>

                  {product.photo && (
                    <div className="photo-preview">
                      <img
                        src={product.photo}
                        alt="preview"
                        className="preview-image"
                      />
                    </div>
                  )}
                </div>
              </td>

              <td>
                {product.link && (
                  <a href={product.link} target="_blank" rel="noreferrer">
                    Open
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default InstrumentTable;
