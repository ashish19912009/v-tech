import Index from "./AdminHome";
import AddProduct from '../AdminAddProduct/AddProduct';
import RemoveProduct from '../AdminRemoveProduct/RemoveProduct';
import AddTeam from '../AdminAddTeamMember/AddTeamMember';
import RemoveTeam from '../AdminRemoveTeamMember/RemoveTeamMember';
import AddCFeedback from '../AdminAddCFeedback/AddCustomerFeedback';
import RemoveCFeedback from '../AdminRemoveCFeedback/RemoveCustomerFeedback';
import UpdateAddress from '../AdminEditContactUs/EditContactUs';

const routes = [
    {
      title: 'Admin Home',
      path: '/AdminHome',
      exact: true,
      component: Index
    },
     {
      title: 'Add Product',
      path: '/AdminHome/AddProduct',
      component: AddProduct
      },
      {
        title: 'Remove Product',
        path: '/AdminHome/RemoveProduct',
        component: RemoveProduct
       },
       {
        title: 'Add Team',
        path: '/AdminHome/AddTeam',
        component: AddTeam
        },
       {
        title: 'Remove Team',
        path: '/AdminHome/RemoveTeam',
        component: RemoveTeam
        },
        {
          title: 'Add Customer FeedBack',
          path: '/AdminHome/AddCustomerFeedback',
          component: AddCFeedback
         },
        {
          title: 'Remove Customer FeedBack',
          path: '/AdminHome/RemoveCustomerFeedback',
          component: RemoveCFeedback
         },    
         {
          title: 'Update Contact Info',
          path: '/AdminHome/UpdateContactInfo',
          component: UpdateAddress
         },
  ]
  
  export default routes;