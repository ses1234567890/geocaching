"""empty message

Revision ID: 5552518273f2
Revises: 41e8839541c8
Create Date: 2023-02-16 17:23:34.214330

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5552518273f2'
down_revision = '41e8839541c8'
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