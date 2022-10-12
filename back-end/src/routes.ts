import { Router } from "express";
import { CorreioResource } from "./resource/CorreioResource";
import { MercadoLivreResource } from "./resource/MercadoLivreResource";
import { MercadoPagoResource } from "./resource/MercadoPagoResource";
/**
 * @author Luan Miranda
 * @Funcionalidade  criar as endpoint das  api.
 */
const router = Router();

const createUserResource = new CorreioResource();
const mercadolivreResource = new MercadoLivreResource();
const mercadopagoResource = new MercadoPagoResource();

router.post("/api/correio", createUserResource.handle);
router.get("/api/correio/buscaend/:cep", createUserResource.findEnderecoByCep);
router.post("/api/correio/rastreio", createUserResource.rastrearEncomendas);
router.post("/api/correio/calcular", createUserResource.calculaEncomendas);

// endpoint do Mercadolivre
router.post("/api/m_livre", mercadolivreResource.login);

// produtos =========================================
router.post("/api/m_livre/item", mercadolivreResource.postProduto);
router.put("/api/m_livre/item/:id", mercadolivreResource.putProduto);
router.get("/api/m_livre/items", mercadolivreResource.findProdutos);
router.put("/api/m_livre/items/descricao", mercadolivreResource.putProdutoDescricao);

// categorias =========================================
router.get("/api/m_livre/categorias", mercadolivreResource.findCategorias);
router.get("/api/m_livre/categorias/:id", mercadolivreResource.findCategoriaById);

// Pedidos =============================================
router.get("/api/m_livre/pedidos/:id", mercadolivreResource.findPedidosByTipo);
router.get("/api/m_livre/pedidos/status/:status", mercadolivreResource.findPedidoById);
router.get("/api/m_livre/pedidos/:id", mercadolivreResource.findPedidoById);

// Notificações
router.get("/api/m_livre/notificacoes", mercadolivreResource.findNotificacoes);
router.get("/api/m_livre/notificacoes/historico", mercadolivreResource.findNotificacoes);

// endpoint do MercadoPago
router.post("/api/m_pago/pagamento", mercadopagoResource.postPagamento);
router.get("/api/m_pago/pagamento/:id", mercadopagoResource.findPagamentoById);
router.get("/api/m_pago/pagamentos", mercadopagoResource.findPagamentos);
router.post("/api/m_pago/notificacoes", mercadopagoResource.findNotificacoes);

export {router}