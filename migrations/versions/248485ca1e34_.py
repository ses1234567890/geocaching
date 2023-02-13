"""empty message

Revision ID: 248485ca1e34
Revises: 6cfcc5f41836
Create Date: 2023-02-13 19:24:35.871657

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '248485ca1e34'
down_revision = '6cfcc5f41836'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cache', schema=None) as batch_op:
        batch_op.alter_column('coordinates_y',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=True)
        batch_op.alter_column('coordinates_x',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=True)
        batch_op.alter_column('difficulty',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cache', schema=None) as batch_op:
        batch_op.alter_column('difficulty',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=False)
        batch_op.alter_column('coordinates_x',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=False)
        batch_op.alter_column('coordinates_y',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=False)

    # ### end Alembic commands ###
