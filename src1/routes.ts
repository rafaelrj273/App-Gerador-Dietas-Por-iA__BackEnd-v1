import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        

        let responseText = "```json\n{\n  \"nome\": \"RAFAEL\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 28,\n  \"altura\": 1.79,\n  \"peso\": 83,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n          \"1 iogurte grego com granola\"\n        ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"Salada de folhas verdes com tomate e azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 batata doce média cozida\",\n        \"1 scoop de whey protein\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de carne vermelha magra grelhada\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de couve refogada\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche Antes de Dormir\",\n      \"alimentos\": [\n        \"1 scoop de caseína\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"

        try{


           // return reply.send({ data: jsonObject });

        }catch(err){
            console.log(err)
        }
        

        reply.send({ ok: true })
    })

    fastify.post("/create", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
    
}