import React from 'react'
import {TbCurrencyNaira} from "react-icons/tb"
import {HiOutlineShoppingCart} from "react-icons/hi"
import {MdStoreMallDirectory} from "react-icons/md"
import {Bar} from "react-chartjs-2"
import {ChartJs} from "chart.js/auto"

const Dashboard = ({data}) => {
  return (
    <div className='dashboard'>
        <div className="innerLayer">
            <h1>Dashboard</h1>
            <div className="grid-columns-3">
                <div className="col col1">
                    <div className="left">
                        <div className="iconCont">
                            <div className="innerCont"><TbCurrencyNaira color='white' size="30px" /></div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="pCont">
                            <h2>Total sales</h2>
                            <h1><TbCurrencyNaira size="25px" /><span>19,626,058</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col col2">
                <div className="left">
                        <div className="iconCont cont2">
                            <div className="innerCont"><HiOutlineShoppingCart color='white' size="30px" /></div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="pCont">
                            <h2>Total orders</h2>
                            <h1><span>3290</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col col3">
                <div className="left">
                        <div className="iconCont cont3">
                            <div className="innerCont"><MdStoreMallDirectory color='white' size="30px" /></div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="pCont">
                            <h2>Total products</h2>
                            <h1><span>322</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-columns-2">
                <div className="col col1">
                    <h1>Statistics</h1>
                    <div className="chartCont">
                       <Bar data={data} />
                    </div>
                </div>
                <div className="col col2">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard