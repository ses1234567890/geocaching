"""empty message

Revision ID: 79a1a1f9338a
Revises: ff27a6827afe
Create Date: 2023-02-03 18:34:53.300872

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '79a1a1f9338a'
down_revision = 'ff27a6827afe'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('blog',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('date_of_creation', sa.Date(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id')
    )
    op.create_table('cache',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('is_approved', sa.Boolean(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('country', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=255), nullable=False),
    sa.Column('postal_code', sa.String(length=255), nullable=False),
    sa.Column('coordinates_y', sa.Float(), nullable=False),
    sa.Column('coordinates_x', sa.Float(), nullable=False),
    sa.Column('difficulty', sa.Float(), nullable=False),
    sa.Column('size', sa.Float(), nullable=False),
    sa.Column('qr_url', sa.String(length=255), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['owner_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cache_found',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('cache_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['cache_id'], ['cache.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'cache_id')
    )
    op.create_table('favorite',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('cache_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('blog_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['blog_id'], ['blog.id'], ),
    sa.ForeignKeyConstraint(['cache_id'], ['cache.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('image',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=255), nullable=False),
    sa.Column('cache_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['cache_id'], ['cache.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('user', sa.Column('is_admin', sa.Boolean(), nullable=False))
    op.add_column('user', sa.Column('name', sa.String(length=255), nullable=False))
    op.add_column('user', sa.Column('date_of_birth', sa.Date(), nullable=False))
    op.add_column('user', sa.Column('country', sa.String(length=255), nullable=False))
    op.add_column('user', sa.Column('city', sa.String(length=255), nullable=False))
    op.add_column('user', sa.Column('images', sa.String(length=255), nullable=False))
    op.add_column('user', sa.Column('ig', sa.String(length=255), nullable=False))
    op.add_column('user', sa.Column('fb', sa.String(length=255), nullable=False))
    op.add_column('user', sa.Column('twitter', sa.String(length=255), nullable=False))
    op.add_column('user', sa.Column('active', sa.Boolean(), nullable=False))
    op.add_column('user', sa.Column('password_hash', sa.String(length=255), nullable=False))
    op.alter_column('user', 'email',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=255),
               existing_nullable=False)
    op.drop_column('user', 'password')
    op.drop_column('user', 'is_active')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('user', sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
    op.alter_column('user', 'email',
               existing_type=sa.String(length=255),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    op.drop_column('user', 'password_hash')
    op.drop_column('user', 'active')
    op.drop_column('user', 'twitter')
    op.drop_column('user', 'fb')
    op.drop_column('user', 'ig')
    op.drop_column('user', 'images')
    op.drop_column('user', 'city')
    op.drop_column('user', 'country')
    op.drop_column('user', 'date_of_birth')
    op.drop_column('user', 'name')
    op.drop_column('user', 'is_admin')
    op.drop_table('image')
    op.drop_table('favorite')
    op.drop_table('cache_found')
    op.drop_table('cache')
    op.drop_table('blog')
    # ### end Alembic commands ###
