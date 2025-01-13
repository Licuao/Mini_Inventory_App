import { Router } from "express";

const router = Router();

router.get('/products', (req, res) => {
    res.send('retornando productos')
})
router.get('/products/10', (req, res) => {
  res.send('retornando un producto')
})

router.post('/products', (req, res) => {
  res.send('creando producto')
})

router.delete('/products', (req, res) => {
  res.send('eliminando producto')
})

router.put('/products', (req, res) => {
  res.send('actualizando productos')
})

export default router