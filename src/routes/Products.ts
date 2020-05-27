
import * as  ProductsController from '../middlewere/Products'
import ExpressPromiseRouter from 'express-promise-router'
const router = ExpressPromiseRouter()
router.post('/prod',ProductsController.CreateProduct)
router.get('/prod:prodId',ProductsController.getProduct)
router.get('/prod',ProductsController.getProducts)
router.delete('/prod:prodId',ProductsController.deleteProduct)
router.patch('/prod:prodId',ProductsController.updateProduct)
export default router