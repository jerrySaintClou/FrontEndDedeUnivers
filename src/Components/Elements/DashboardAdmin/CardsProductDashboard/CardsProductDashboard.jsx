import classes from "./CardsProductDashboard.module.css";

export default function CardsProductDashboard(){
    return(
        <div className={classes.CardsProductDashboard}>
            <div className={classes.cardProductDashboard}>
                <div className={classes.cardImageDashboard}>
                    <img src="https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/45/5990f506c28396cdb72a2ffc5929ad1b9dff3ca0.jpeg" alt="" />
                </div>
                <div className={classes.cardInfoDashboard}>
                    <p className={classes.titleStyleCardDasboard}>Title</p>
                    <p className={classes.descriptionStyleCardDasboard}>Description</p>
                    <p className={classes.priceStyleCardDasboard}>Price</p>
                    <p className={classes.stockStyleCardDasboard}>Stock</p>
                    <button className={classes.modifStyleDasboard}>Modifier</button>
                    <button className={classes.deleteStyleDasboard}>Supprimer</button>
                </div>
            </div>

            
            <div className={classes.cardProductDashboard}>
                <div className={classes.cardImageDashboard}>
                    <img src="https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/9a4de6bc8c9dc73419db604e4488b791.jpg" alt="" />
                </div>
                <div className={classes.cardInfoDashboard}>
                    <p className={classes.titleStyleCardDasboard}>Title</p>
                    <p className={classes.descriptionStyleCardDasboard}>Description</p>
                    <p className={classes.priceStyleCardDasboard}>Price</p>
                    <p className={classes.stockStyleCardDasboard}>Stock</p>
                    <button className={classes.modifStyleDasboard}>Modifier</button>
                    <button className={classes.deleteStyleDasboard}>Supprimer</button>
                </div>
            </div>

            
            <div className={classes.cardProductDashboard}>
                <div className={classes.cardImageDashboard}>
                    <img src="https://images.immediate.co.uk/production/volatile/sites/3/2021/12/halo-games-order-370d750.jpg?quality=90&resize=620,414" alt="" />
                </div>
                <div className={classes.cardInfoDashboard}>
                    <p className={classes.titleStyleCardDasboard}>Title</p>
                    <p className={classes.descriptionStyleCardDasboard}>Description</p>
                    <p className={classes.priceStyleCardDasboard}>Price</p>
                    <p className={classes.stockStyleCardDasboard}>Stock</p>
                    <button className={classes.modifStyleDasboard}>Modifier</button>
                    <button className={classes.deleteStyleDasboard}>Supprimer</button>
                </div>
            </div>
        </div>
    )
}