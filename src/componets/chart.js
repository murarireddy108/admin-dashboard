
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Pie from './piechart.js'


export default function Main(){
  const data = [
    {
      name: 'Jan',
      uv: 0,
      pv: 0,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 5000,
      pv: 10000,
      amt: 2400,
    },
    {
      name: 'Mar',
      uv: 5000,
      pv: 5000,
      amt: 2210,
    },
    {
      name: 'Apr',
      uv: 5000,
      pv: 15000,
      amt: 2210,
    },
    {
      name: 'May',
      uv: 10000,
      pv: 10000,
      amt: 2290,
    },
    {
      name: 'Jun',
      uv: 10000,
      pv: 20000,
      amt: 2290,
    },
    {
      name: 'Jul',
      uv: 30000,
      pv: 15000,
      amt: 2000,
    },
    {
      name: 'Aug',
      uv: 30000,
      pv: 25000,
      amt: 2000,
    },
    {
      name: 'Sep',
      uv: 50000,
      pv: 20000,
      amt: 2181,
    },
    {
      name: 'Oct',
      uv: 50000,
      pv: 30000,
      amt: 2181,
    },
    {
      name: 'Nov',
      uv: 70000,
      pv: 25000,
      amt: 2500,
    },
    {
      name: 'Dec',
      uv: 70000,
      pv: 40000,
      amt: 2500,
    },
  ];

  return(
     <section className="area-chart">
        <div className="row">
          <div className="col-lg-8">
          <div class="card">
  <div class="card-header">
    Earnings Overview
  </div>
  <div class="card-body">
  <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="" />
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#f6f8fe" />
        </AreaChart>
      </ResponsiveContainer>
    
  </div>
</div>
          </div>
          <div className='col-lg-4'>
            <div className="card pie-chart">
              <div className="card-header">Revenue Sources</div>
              <div className="card-body">
                <Pie/>
              </div>
            </div>
          </div>
        </div>
     </section>
  )
}

