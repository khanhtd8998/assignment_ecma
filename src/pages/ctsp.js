import Header from "../components/header";
import Footer from "../components/footer";

const ChiTietSp = function () { 
    return `
    ${Header()}
    <div
    class="d-flex tw-gap-[100px] justify-content-center product-info tw-mx-auto"
  >
    <div class="product-img">
      <div
        class="d-flex justify-content-center tw-w-[400px] tw-py-[20px] border"
      >
        <img
          class="tw-w-[300px]"
          src="https://cafefcdn.com/2017/photo-0-1501496971284.jpg"
          alt=""
        />
      </div>
      <div class="d-flex justify-content-between my-3">
        <img
          class="tw-w-[60px]"
          src="https://cafefcdn.com/2017/photo-0-1501496971284.jpg"
          alt=""
        />
        <img
          class="tw-w-[60px]"
          src="https://cafefcdn.com/2017/photo-0-1501496971284.jpg"
          alt=""
        />
        <img
          class="tw-w-[60px]"
          src="https://cafefcdn.com/2017/photo-0-1501496971284.jpg"
          alt=""
        />
        <img
          class="tw-w-[60px]"
          src="https://cafefcdn.com/2017/photo-0-1501496971284.jpg"
          alt=""
        />
        <img
          class="tw-w-[60px]"
          src="https://cafefcdn.com/2017/photo-0-1501496971284.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="tw-w-[500px] p-3 border-start">
      <div class="div">
        <h3>Càng kỷ luật, càng tự do</h3>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <span class="tw-text-gray-500 mx-2">(Xem 2942 đánh giá)</span>
        <span class="tw-text-gray-500">|</span>
        <span class="tw-text-gray-500">Đã bán 1000+</span>
      </div>
      <div class="pb-2 border-bottom">
        <div
          class="price d-flex align-items-center gap-lg-3 my-2 p-1 tw-bg-[#FAFAFA]"
        >
          <p class="tw-text-[40px] tw-text-[#FF424E] tw-font-medium tw-p-0">
            112.500 ₫
          </p>
          <p class="tw-text-xl tw-text-[#ccc] tw-font-medium tw-pb-1">
            <del>112.500 ₫</del>
          </p>
          <p
            class="discount tw-text-xl tw-text-[#FF424E] tw-font-medium tw-pb-2"
          >
            -25%
          </p>
        </div>
      </div>
      <div class="py-5 border-bottom">
        <div class="quantity">
          <p class="tw-text-xl tw-font-medium">Số Lượng</p>
          <button type="button" class="decrease py-2 px-3 border rounded-2">
            <i class="fa-solid fa-minus"></i>
          </button>
          <input class="quantity_input border py-2 px-3 tw-w-[50px]" type="number" value="1" min="1" />
          <button type="button" class="increase py-2 px-3 border rounded-2">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <button class="my-3 tw-min-h-[50px] tw-min-w-[300px] tw-text-white tw-bg-[#FF3945] rounded-2">Chọn mua</button>
      </div>
    </div>
  </div>
  <div class="tw-px-[100px] tw-my-[50px]">
    <h4 class=mb-5>Sản Phẩm Tương Tự</h4>
    <div class="tw-grid tw-grid-cols-5 tw-gap-[50px]">
      <div class="product tw-w-[200px]">
        <img
          class="tw-w-full"
          src="https://cafefcdn.com/2017/photo-0-1501496971284.jpg"
          alt=""
        />
        <div
          class="name-product tw-w-full tw-text-start tw-h-[50px] tw-mt-5"
        >
          <p class="tw-text-xl tw-m-0 tw-p-0">
            Chó sủa nhầm cây, tại sao những gì ta biết về thành
          </p>
        </div>
        <div class="rating tw-mt-10">
          <i class="fa-solid fa-star fa-xs"></i>
          <i class="fa-solid fa-star fa-xs"></i>
          <i class="fa-solid fa-star fa-xs"></i>
          <i class="fa-solid fa-star fa-xs"></i>
          <i class="fa-solid fa-star fa-xs"></i>
          <span class="tw-text-gray-500">|</span>
          <span class="tw-text-gray-500">Đã bán 1000+</span>
        </div>
        <div class="price d-flex align-items-center gap-lg-3">
          <p class="tw-text-xl tw-text-[#FF424E] tw-font-medium tw-p-0">
            112.500 ₫
          </p>
          <p class="discount tw-text-4px tw-text-[#FF424E]">-25%</p>
        </div>
      </div>
      
      
    </div>
  </div>
  <div class="tw-px-[100px] tw-mt-[50px] tw-pe-[250px]">
    <h4 class="mb-3">Mô Tả Sản Phẩm</h4>
    <p>
      KỶ LUẬT vốn là ván cờ bạn phải tự đấu với chính mình. Thắng - bạn sẽ có được “bản năng của người mạnh mẽ nhất”, đó là sự tự kiểm soát bản thân. Thua - bạn mãi sống trong cảm giác tạm bợ, nuối tiếc. Càng dễ dàng dung túng cho những thói quen trì hoãn bao nhiêu, cuộc sống của bạn sẽ đi càng nhanh tới sự mất kiểm soát và thiếu quy hoạch bấy nhiêu.
      Hãy kiên trì đặt ra yêu cầu cao với bản thân, từ chối sự mê hoặc của thói tùy tiện đồng thời thiết lập cho mình những thói quen tốt trong hành vi thường ngày. Sự nỗ lực sẽ luôn được đền đáp xứng đáng nếu bạn biết cách đầu tư công sức và thời gian. Bởi một ngày nào đó trong tương lai, những gì bạn làm sẽ phản chiếu đầy đủ trên chính con người và cuộc đời của bạn.
      CÀNG KỶ LUẬT, CÀNG TỰ DO - Mong rằng tại thời điểm kết thúc hành trình với cuốn sách, bạn đã là một phiên bản khác kỷ luật hơn, nhưng tự do hơn.
      Một vài trích dẫn:
      “Bạn cần phải biết rằng tình yêu là hoa thêu trên gấm. Có thì tốt, không có cũng chẳng sao, thực sự không đáng để bạn vì nó mà từ bỏ sự nghiệp, từ bỏ cơ hội thăng tiến thậm chí là từ bỏ cả cuộc đời vinh hoa sau này.”
      “Những người trưởng thành như chúng ta nên nhìn cuộc sống rộng hơn một chút, ghen có thể có, tức giận có thể có. Thế nhưng, có những cảm xúc chỉ nên lướt qua trong lòng, ngày hôm sau ngủ dậy hãy để nó rời đi cùng với đêm đen mới là cách lựa chọn tốt nhất.”
      “Mỗi người đều có kinh nghiệm sống không giống nhau, yêu cầu không giống nhau. Điều giống nhau là chúng ta đều nên tìm mọi cách trau dồi khả năng của bản thân để sống tốt cuộc đời này.”
      Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng)..... 
    </p>
    <div class="text-center">
      <button class="my-3 btn btn-outline-primary tw-min-h-[50px] tw-min-w-[300px] tw-text-[#FF3945] tw-rounded-2">Xem Thêm Nội Dung</button>
    </div>
  </div>
    ${Footer()}
    `
}

export default ChiTietSp
