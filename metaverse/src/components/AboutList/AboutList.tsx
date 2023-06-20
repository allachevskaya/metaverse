import { Parallax } from 'react-scroll-parallax'
import styles from './AboutList.module.sass'
import Image from 'next/image'


interface AboutListProps {
    isActiveGame: GAME
}


const AboutList: React.FC<AboutListProps> = ({ isActiveGame }) => {
    console.log(isActiveGame.background)

    return (
        <Parallax speed={-20}>
            <section id={isActiveGame.id} className={styles.about}>
                <div className={styles.aboutContainer}>
                    <Image width={1300}
                        height={1300}
                        quality={100}
                        src={isActiveGame.background}
                        alt='' /> 
                    <div className={styles.aboutContainerContent}>
                        <div className={styles.aboutContainerContentTitle}>
                            <Image
                                width={1300}
                                height={400}
                                quality={100}
                                src={isActiveGame.backgroundTitle}
                                alt=''

                            />
                        </div>
                        <div className={styles.aboutContainerContentDescription}>
                            {isActiveGame.description.map((item) =>
                                <p>{item}</p>
                            )}
                        </div>
                        <div className={styles.aboutContainerContentProducts}>
                           <div className="">
                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore eum accusamus repellat voluptates deserunt ut et magni obcaecati reiciendis odio incidunt totam natus blanditiis, vero, error cum. Omnis maiores perferendis magni. Eaque pariatur nobis ea quia soluta similique provident eveniet optio tempore numquam. Ut mollitia dolorum ab ullam culpa facilis quisquam quasi odio eveniet! Blanditiis, dolores quidem. Libero voluptate in sapiente officiis veniam nisi quibusdam, nobis illo quaerat assumenda magnam eius nam laudantium, qui quam ipsa alias. A reiciendis ullam dolorum magnam dicta blanditiis, vel quasi quo nesciunt repudiandae nihil ipsam? Autem sit, unde libero sapiente nobis maiores? Corporis ad reprehenderit optio pariatur voluptates incidunt repudiandae praesentium, non, voluptate necessitatibus id nemo quam cupiditate eius, esse ipsam dolorem fugiat officiis. Aliquam quis ipsa consequuntur, ipsum ex ad minus? Vel molestias in autem eos magnam molestiae incidunt quaerat facilis beatae. Voluptate nihil necessitatibus eveniet eligendi illo eius veritatis consequatur laboriosam nobis atque, dignissimos architecto accusantium, tempore obcaecati corrupti, aut distinctio sit. Sunt soluta aliquid, asperiores omnis esse nostrum tenetur harum libero autem deleniti rem quidem sapiente eaque modi quo nam veniam cum quod recusandae magni cumque aut molestias voluptatum. Dolore, reprehenderit totam, eaque aut quidem accusantium officiis quod illum molestiae deserunt corporis odio nostrum dolorem nemo harum! Esse vitae deleniti facere nesciunt, dolorem quis modi, labore iure voluptates voluptatibus quo ipsam distinctio laboriosam unde eligendi cupiditate rerum consectetur perferendis? Unde cumque, nihil, repellat quas architecto non praesentium voluptas doloribus maxime error aperiam sit eligendi nisi tempore atque vitae asperiores tempora omnis. Nisi, beatae! Nostrum voluptatibus quo libero error culpa obcaecati blanditiis, cumque similique. Accusantium aut minima, incidunt inventore quia enim, fuga magnam ullam nostrum dolores eum aliquam odio nam? Debitis est id voluptate quo, voluptas animi tenetur dolorum! Eos, eius molestias. Voluptates culpa quod placeat, temporibus suscipit nostrum eius atque eaque, consequatur error aliquam ut asperiores dignissimos, cupiditate optio delectus sequi quae omnis non corrupti? Quae, autem! Qui dolorum, soluta rem provident fugiat ratione doloribus. Nemo tenetur, dolores adipisci ut commodi enim veritatis est velit omnis eum repellat odit. Ducimus nam eligendi obcaecati veritatis vitae ad ullam illum nostrum sint temporibus sunt, eveniet architecto. Hic, laboriosam ducimus tempore a suscipit necessitatibus deleniti excepturi laudantium quis dolor ratione exercitationem non, nulla aliquam cupiditate pariatur. Sunt voluptatum maxime, voluptatibus sapiente placeat unde quo debitis perferendis, possimus aperiam laborum illum ullam eligendi ipsum quos dolores modi? Placeat minus maiores repellat cumque, deleniti laborum ab labore molestiae eius, praesentium iusto, exercitationem doloribus repudiandae quod temporibus cupiditate dicta reiciendis sit similique. Et quam nobis molestias? Vel cupiditate ut explicabo soluta est, molestiae culpa vitae quam quidem aliquid voluptatibus sed, eius voluptatem ad illo animi tempora quibusdam officia fugit sequi quo dolor. Nesciunt labore repellat voluptatem. Ducimus, voluptatibus eius. Veritatis fugit laborum nostrum impedit? Debitis, perferendis ratione ipsam, voluptatem praesentium consectetur omnis cum hic fugiat quae at laudantium. Quod ullam adipisci nemo accusantium totam deserunt error nobis nesciunt, quidem, eveniet at autem, corporis laborum quae? Accusantium atque sed soluta incidunt odio voluptatibus praesentium commodi asperiores dicta, fugiat placeat aspernatur minus explicabo doloremque quos. Magnam nesciunt alias iusto quod quam dolorum nihil commodi quae hic, ab tempora ducimus nam dolor molestias sit consequuntur accusamus, harum voluptatem facere voluptates architecto rerum. Tenetur labore unde non, quos ducimus incidunt sit illo quas deleniti quae, amet consectetur provident eum sint quaerat! Inventore nesciunt eius, accusantium maiores alias officiis consequatur libero perspiciatis id? Saepe minus iusto ipsam natus alias eaque consequatur? Dolor officia ipsa omnis tempore laboriosam quidem, vitae asperiores illum reiciendis eos sed odio, optio explicabo, a aut in eius beatae fuga blanditiis dolorum! Delectus veniam et non beatae itaque mollitia explicabo quae, earum repellat doloribus nam quidem blanditiis, perspiciatis maiores fugiat esse? Quidem debitis earum in commodi molestias, non dolorum laboriosam vero, magnam, at totam dolore soluta. Aut, nihil eos. Veritatis magni, ipsa suscipit voluptatem qui aperiam voluptas reprehenderit magnam in quibusdam perferendis consequuntur, ea incidunt ipsam distinctio quos cum et nam beatae doloremque ut exercitationem fugiat. Ut accusantium, ratione corrupti inventore esse optio eos aperiam illum dolor. Unde dolor excepturi, nemo eligendi nisi harum alias soluta! Deleniti, aperiam eos a dolore provident adipisci quis eaque error quos, cumque officia suscipit, excepturi quasi natus nam. Laborum atque dolorum sint eligendi iusto, quaerat impedit ratione dolorem, quis itaque unde, porro dolor eum fuga officiis nisi sunt iure minima similique velit accusantium accusamus laudantium non? Voluptates dolore dignissimos ullam laborum, consequuntur saepe exercitationem harum? Nisi adipisci quia debitis repudiandae! Natus consequuntur assumenda, ratione nobis quo ipsum repudiandae cumque vero perferendis aperiam praesentium ipsa saepe possimus eveniet laborum! Inventore at maiores laudantium quod aliquid, hic odio eaque, dolorum rerum porro quae commodi dignissimos. Aliquam quibusdam accusantium nemo, quod, expedita sequi autem maiores nulla sunt necessitatibus nam, unde molestias. Molestiae delectus quis dolorum nam reiciendis hic, eum quibusdam ducimus tempore velit! Modi distinctio consequuntur quidem impedit dicta at architecto, quas sapiente illum molestiae aliquam corrupti, debitis, earum corporis blanditiis eveniet. Tempore, nihil pariatur libero esse eos aliquam assumenda praesentium fugiat nisi soluta quod molestiae, cumque maiores. Repellendus quod laborum quaerat eum esse deserunt culpa doloribus autem quisquam debitis, laboriosam, eos voluptate ex? Minima vitae corporis ipsa? Perspiciatis vel magni rem sint, molestias quibusdam. Tempore, eius numquam. Eligendi corporis, explicabo maxime impedit porro eum dolorem aliquam mollitia eos corrupti magni pariatur nobis sequi sed doloremque voluptas modi nam, dignissimos illo esse. Ad veniam, expedita aspernatur magni perferendis magnam dolorem, alias et velit rerum culpa minima distinctio sit amet illo accusamus voluptas fuga quia ea illum consectetur tenetur aut qui dolore. Cumque distinctio officiis eveniet accusamus beatae odio dolorum facilis temporibus rem vel! Dignissimos voluptatem non amet consectetur porro iusto nisi voluptates natus. Deleniti consequatur ipsam facilis distinctio porro beatae ipsum eveniet? Ex ipsum reprehenderit odio quidem incidunt in vitae perspiciatis, nisi, rem pariatur praesentium consectetur odit atque placeat asperiores velit! Praesentium magni ipsa incidunt eos sint autem minima rem! Dignissimos totam sit architecto tenetur? Neque, inventore delectus? Delectus amet aliquam, repudiandae quis assumenda consequuntur numquam rem, culpa quasi accusamus modi alias sunt voluptatem sint!
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>

    )
}
export default AboutList