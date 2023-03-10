"""empty message

Revision ID: 365c05a3e3c8
Revises: 4423b864c19d
Create Date: 2023-02-10 20:24:01.695516

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '365c05a3e3c8'
down_revision = '4423b864c19d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('blog', schema=None) as batch_op:
        batch_op.create_unique_constraint(None, ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('blog', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')

    # ### end Alembic commands ###
