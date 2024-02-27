
'use client'
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RepeatIcon from '@mui/icons-material/Repeat';



export default function ProductCard({data}) {
    // console.log(data);

    return (
        <>
            <div className="card border-0 flex-fill justify-content-center algin-data-center m-4 shadow-lg" key={data?.id}>
                <div className="card-body">
                    <Badge badgeContent={data?.badge} color="primary">
                        <div className="img-box-product">
                            {/* <span >On Sale</span> */}
                            <img src={data?.image_url} alt="" className='img-fluid breadcrumb-area' width={200} />
                        </div>
                    </Badge>
                    <h6>{data?.title.slice(0, 20)}</h6>
                   <div className="d-flex justify-content-between">
                    <p>Rs.</p>
                   <p>{data?.price}</p>
                   </div>
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
