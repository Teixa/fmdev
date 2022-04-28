import traceback
from Model import db
from Model import ControleEngajamento, ControleEngajamentoSchema
from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required

class EtlResource(Resource):

    @jwt_required
    def get(self):
        try:
            res = ControleEngajamento.query.order_by(ControleEngajamento.id).with_entities(
                ControleEngajamento.id, ControleEngajamento.phenomenon, ControleEngajamento.description).all()

            schema = ControleEngajamentoSchema(many=True)
            data = schema.dump(res)

            return data

        except:
            traceback.print_exc()
            return None, 500
