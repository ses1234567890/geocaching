"""empty message

Revision ID: d035347b79f7
Revises: 248485ca1e34
Create Date: 2023-02-13 19:30:40.347114

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'd035347b79f7'
down_revision = '248485ca1e34'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cache', schema=None) as batch_op:
        batch_op.alter_column('difficulty',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               type_=sa.String(length=255),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cache', schema=None) as batch_op:
        batch_op.alter_column('difficulty',
               existing_type=sa.String(length=255),
               type_=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=True)

    # ### end Alembic commands ###
