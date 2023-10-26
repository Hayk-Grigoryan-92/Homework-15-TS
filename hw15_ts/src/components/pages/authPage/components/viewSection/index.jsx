import { Route, Routes } from 'react-router-dom'
import './style.scss'
import { DashboardSection } from './components/dashboardSection'
import { UsersSection } from './components/users'
import { ProductsSection } from './components/productsSection'
import { CategoriesSection } from './components/categoriesSection'
import { SettingsSection } from './components/settingsSection'

export const ViewSection = () => {
    
    return (
        <div className='dashboard'>
            <Routes>
                <Route path='/auth/dashboard' element={<DashboardSection/>}/>
                <Route path='/auth/users' element={<UsersSection/>}/>
                <Route path='/auth/products' element={<ProductsSection/>}/>
                <Route path='/auth/categories' element={<CategoriesSection/>}/>
                <Route path='/auth/settings' element={<SettingsSection/>}/>
            </Routes>
        </div>
    )
}