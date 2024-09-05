import MoviesCarousel from "@/components/organisms/landing/Carousel";
import { fetchTrendyMovies } from "@/adapter/MovieService";
import MoviesGrid from "@/components/organisms/landing/MoviesGrid";
import BlockWrapper from "@/components/molecules/BlockWrapper";

export default async function Home() {
  const fetchedMovies = await fetchTrendyMovies()
  return (
    <div className="flex flex-col">
      <MoviesCarousel movies={fetchedMovies} />
      <BlockWrapper>
        <MoviesGrid target="tv" />
      </BlockWrapper>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, id consectetur non perspiciatis commodi fuga nostrum sapiente earum beatae. Sit, ratione, nobis vitae suscipit velit id deleniti dicta, eius minima alias enim iure perspiciatis corrupti illum? Esse laboriosam eius eveniet eligendi, expedita illum consequatur, autem provident ipsam veniam, dolore eum totam sunt explicabo! Sed autem quisquam iure iste, blanditiis ullam vero consectetur, sapiente natus similique incidunt nobis eius tenetur? Repellat assumenda quibusdam nisi. Nesciunt beatae distinctio vel omnis quod sequi voluptatum exercitationem praesentium modi! Fuga doloremque consectetur eligendi temporibus a ducimus consequuntur culpa! Libero harum fugit beatae veniam commodi atque quidem iure cum, nisi tempora corrupti consectetur voluptatibus. Aperiam rerum accusamus placeat quaerat amet voluptates sequi vel repellat eum sed iusto sint provident non neque, iure reprehenderit necessitatibus nam porro commodi dolore! Quisquam inventore commodi laborum explicabo, illo ea ipsum vitae amet eaque voluptatibus animi voluptates magnam quibusdam illum expedita laudantium officiis deleniti nihil aut minus labore quas, ratione officia optio. Repudiandae dolorum natus culpa esse id odio eligendi ducimus eaque omnis quod, quibusdam accusantium? Cumque amet repudiandae nisi minus. Neque laboriosam magni accusantium sint illo dolor necessitatibus ipsa vel distinctio officiis voluptates tenetur nemo, asperiores molestiae corrupti quisquam id.</div>
    </div>
  );
}
