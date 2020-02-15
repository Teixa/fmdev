"""empty message

Revision ID: b45d11306e25
Revises: 6144ba9b2330
Create Date: 2020-02-15 17:32:47.577005

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b45d11306e25'
down_revision = '6144ba9b2330'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('lms', sa.Column('version', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('lms', 'version')
    # ### end Alembic commands ###
