import React from 'react'; 
import KdramaCard from './components/kdrama-card';
import { NewKdramaForm } from './components/new-kdrama-form';
import {kDramaService} from './services/kdrama-service'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
// import '../../node_modules/jquery/dist/jquery.js'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'


export default class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      kdramas:[]
    }

    this.addNewKdrama = this.addNewKdrama.bind(this); 
    this.deleteKdrama = this.deleteKdrama.bind(this); 
    this.updateKdrama = this.updateKdrama.bind(this); 
  }

  render() {
    let kdramacards = this.state.kdramas.map(kdrama => {
      return <KdramaCard {...kdrama} key={kdrama._id}
      deleteKdrama = {this.deleteKdrama}
      updateKdrama = {this.updateKdrama} />
    }); 

    return(
      <div className="container">
        <div>
        <NewKdramaForm addNewKdrama={this.addNewKdrama} />
        </div>
        <div className="col">
          {kdramacards}
        </div>
      </div>
    )
  }


  refreshData = async() => {
    const kdramas = await kDramaService.getAll(); 
    this.setState({kdramas}); 
  }

  componentDidMount() {
    this.refreshData(); 
  }

  addNewKdrama = async(kdrama) => {
    await kDramaService.create(kdrama); 
    this.refreshData();
  }

  updateKdrama = async(kdrama) => {
    await kDramaService.update(kdrama); 
    this.refreshData(); 
  }

  deleteKdrama = async(id) => {
    await kDramaService.delete(id); 
    this.refreshData(); 
  }
}
