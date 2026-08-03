import { MessageScroller, MessageScrollerContent, MessageScrollerProvider, MessageScrollerViewport } from "@/components/ui/message-scroller";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { ProductSection } from "@/app/(with-navbar)/home/_components/product/ProductSection";
import { ProductSectionHeader } from "@/app/(with-navbar)/home/_components/product/ProductSectionHeader";
import { SectionContent } from "@/app/(with-navbar)/home/_components/SectionContent";
import { ProductItem } from "@/app/(with-navbar)/home/_components/product/ProductItem";
import { toPersianDigits } from "@/utils/numberConversions";

export const chatMessages = [
  {
    id: "1",
    role: "user",
    type: "text",
    content: "بهترین کادو برای روز مادر چیست؟",
    createdAt: "10:30",
  },
  {
    id: "2",
    role: "assistant",
    type: "text",
    content:
      "سلام وقت بخیر من بررسی کردم امروز روز مادر هست و تمام کاربران بدوکادو امروز را به دنبال کادویی مناسب برای مادر خود بوده اند . چندتا از پرفروش ترین کادو ها را در امروز را بعت معرفی میکنم",
    createdAt: "10:30",
  },
  {
    id: "3",
    role: "assistant",
    type: "products",
    title: "پیشنهادات",
    actionText: "دیدن همه",
    products: [
      {
        id: "p1",
        name: "مجسمه استوانه‌ای",
        price: 150000,
        image: "/images/products/vase-1.jpg",
      },
      {
        id: "p2",
        name: "مجسمه استوانه‌ای",
        price: 150000,
        image: "/images/products/flowers-1.jpg",
      },
      {
        id: "p3",
        name: "مجسمه استوانه‌ای",
        price: 150000,
        image: "/images/products/chocolate-1.jpg",
      },
    ],
    createdAt: "10:31",
  },
  {
    id: "4",
    role: "user",
    type: "text",
    content: "نمونه های بهتری پیشنهاد بده",
    createdAt: "10:31",
  },
  {
    id: "5",
    role: "assistant",
    type: "text",
    content:
      "باشه!من دوباره هم بررسی کردم بهترین موارد ممکن را بهتر پیشنهاد میدم.لطفا با دقت بهتری بررسی کن .",
    createdAt: "10:31",
  },
];

const bobbleContentClassName = {
  user: "rounded-l-3xl rounded-tr-4xl",
  assistant: "rounded-r-3xl rounded-tl-4xl",
}

const ChatPage = () => {
  return (
           <MessageScrollerProvider>
          <MessageScroller>
            <MessageScrollerViewport className="">
              <MessageScrollerContent

                className="p-(--card-spacing)"
              >
                {chatMessages.map((message) => {
                  if (message.type === "text") return (
                    <Bubble key={message.id} align={message.role === "assistant" ? "end" : "start"}
                      variant={message.role === "assistant" ? "muted" : "default"}
                    >
                      <BubbleContent className={message.role === "user" ? bobbleContentClassName.user : bobbleContentClassName.assistant}>{message.content}</BubbleContent>
                    </Bubble>
                  )
                  else return (
                    <ProductSection key={message.id}>
                      <ProductSectionHeader
                        title={message.title || ""}
                        link="/products"
                        className="items-center"
                      />
                      <SectionContent variant="scroll">
                        {message.products?.map((product) => (
                          <ProductItem
                            key={product.id}
                            title={product.name}
                            imageSrc="/samples/sample-product-1.jpg"

                            price={toPersianDigits(product.price)}
                          />
                        ))}
                      </SectionContent>
                    </ProductSection>
                  )


                })}
              </MessageScrollerContent>
            </MessageScrollerViewport>
          </MessageScroller>
        </MessageScrollerProvider>
  )
}

export default ChatPage