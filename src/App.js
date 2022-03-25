import Header from './components/Header'
// import Slider from './components/Slider'
import SimpleSlider from './components/SimpleSlider'
import Worry from './components/Worry'
import Discount from './components/Discount'
import Delivery from './components/Delivery'
import Benefit from './components/Benefit'
import Footer from './components/Footer'
import OrderManagement from './components/OrderManagement'
import DailyControl from './components/DailyControl'
import Complain from './components/Complain'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Slider /> */}
      <SimpleSlider />
      <Worry />
      <Discount />
      <Delivery />
      <Benefit />
      <OrderManagement />
      <DailyControl />
      <Complain />
      <Footer />
    </div>
  );
}

export default App;
