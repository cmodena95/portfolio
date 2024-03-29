class IllustrationPolicy < ApplicationPolicy
  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      scope.all
    end
  end

  def show?
    true
  end

  def new?
    user
  end

  def create?
    new?
  end

  def edit?
    user
  end

  def update?
    edit?
  end

  def destroy?
    user
  end
end
