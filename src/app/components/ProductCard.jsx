
'use client'
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RepeatIcon from '@mui/icons-material/Repeat';
export default function ProductCard() {
    return (
        <>
            <div className="card border-0 justify-content-center algin-item-center m-4 shadow-lg">
                <div className="card-body">
                    <Badge badgeContent={' On Sale'} color="primary">
                        <div className="img-box-product">
                            {/* <span >On Sale</span> */}
                            <img src="http://ecommerce.webprotec.org/assets/uploads/media-uploader/group-11649652514.jpg" alt="" className='img-fluid' width={200} />
                        </div>
                    </Badge>
                </div>
                {/* <AddShoppingCartIcon />
                <FavoriteIcon /> */}
                <div className="card-footer">
                    <div className="hover">
                        <div className="product-interaction-list">
                            <ul className='d-flex'>
                                <li className='me-3'><AddShoppingCartIcon /></li>
                                <li className='me-3'><FavoriteIcon /></li>
                                <li className='me-3'><VisibilityIcon /></li>
                                <li className='me-3'><RepeatIcon /></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
